const db = require('../models/db');
const Opozorilo = db.conn2.model("Opozorilo");
const Obcina = db.conn2.model("Obcina");

//Pridobi vsa opozorila
const pridobiVsaOpozorila = (req, res) => {
    Opozorilo.find().exec((napaka, opozorilo) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(opozorilo);
    })
}

//Pridobi opozorilo z dolocenim id
const pridobiOpozorilo = (req, res) => {
    Opozorilo.findById(req.params.idOpozorila).exec((napaka, opozorilo) => {
        if (!opozorilo) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem opozorila z id: ${req.params.idOpozorila}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(opozorilo);
    });
}

//Uredi opozorilo z dolocenim id
const urediOpozorilo = (req, res) => {
    if (!req.params.idOpozorila) {
        return res.status(400).json({sporocilo: "Ne najdem opozorila, id opozorila je obvezen!"});
    }
    Opozorilo.findById(req.params.idOpozorila).exec((napaka, opozorilo) => {
        if (!opozorilo) {
            return res.status(404).json({sporocilo: "Ne najdem opozorila!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojece opozorilo
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.naslov) {
            opozorilo.naslov = req.body.naslov;
        }
        if (req.body.vsebina) {
            opozorilo.vsebina = req.body.vsebina;
        }
        if (req.body.komentarji) {
            opozorilo.komentarji = req.body.komentarji;
        }

        opozorilo.save((napaka, opozorilo) => {
            if (napaka) {
                res.status(404).json(napaka);
            }
            else {
                res.status(200).json(opozorilo);
            }
        })
    });
}

//Ustvari opozorilo
const ustvariOpozorilo = (req, res) => {
    const idObcine = req.params.idObcine;
    if (idObcine) {
        Obcina.findById(idObcine)
            .exec((napaka, obcina) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else {
                    vstaviOpozorilo(req, res, obcina);
                }
            })
    }
}

//Izbrisi opozorilo
const izbrisiOpozorilo = (req, res) => {
    const { idObcina, idOpozorila } = req.params;

    if (!idObcina || !idOpozorila) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju občine ali opozorila!"
        });
    }

    if (idObcina) {
        Opozorilo.findByIdAndRemove(idOpozorila).exec((napaka) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            izbrisiIdOpozorilo(req, res, idObcina, idOpozorila);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Pomozne metode
//Brisanje opozorila v tabeli Obcina
const izbrisiIdOpozorilo = (req, res, idObcina, idOpozorila) => {
    Obcina.findById(idObcina)
    .exec((napaka, obcina) => {
        if (!obcina) {
            return res.status(404).json({ sporocilo: "Ne najdem občine!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce obcina ima kaksno opozorilo
        if (obcina.opozorila && obcina.opozorila.length > 0) {
            //brisanje indexa v tabeli opozorila, ce le-ta obstaja
            let index = obcina.opozorila.indexOf(idOpozorila);
            if (index !== -1) {
                obcina.opozorila.splice(index, 1);
                obcina.save((napaka) => {
                    if (napaka) {
                        return res.status(500).json(napaka);
                    }
                    else {
                        res.status(204).json(null);
                    }
                })
            }
        }
        else {
            res.status(404).json({ sporocilo: "Ni opozorila za brisanje!"});
        }
    });
}

//Vstavljanje opozorila v tabelo Obcina
const vstaviOpozorilo = (req, res, obcina) => {
    const opozorilo = new Opozorilo({
        naslov: req.body.naslov,
        vsebina: req.body.vsebina,
        komentarji: []
    });

    //Pushamo id v tabelo opozorila in shranimo
    obcina.opozorila.push(opozorilo._id);
    obcina.save((napaka, obcina) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Opozorilo.create(opozorilo, (napaka, opozorilo) => {
                if (napaka) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    res.status(201).json(opozorilo);
                }
            })
        }
    })
}



module.exports = {
    pridobiVsaOpozorila,
    pridobiOpozorilo,
    urediOpozorilo,
    ustvariOpozorilo,
    izbrisiOpozorilo
}