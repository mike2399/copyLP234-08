const db = require("../models/db");
const Naloga = db.conn2.model("Naloga")
const Izvajalec = db.conn1.model("Izvajalec");

//Pridobi vse naloge
const pridobiVseNaloge = (req, res) => {
    Naloga.find().exec((napaka, naloga) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(naloga);
    })
}

//Pridobi nalogo s podanim id
const pridobiNalogo = (req, res) => {
    Naloga.findById(req.params.idNaloga).exec((napaka, naloga) => {
        if (!naloga) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem naloge z id: ${req.params.idNaloga}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(naloga);
    });
}

//Uredi nalogo z dolocenim id
const urediNalogo = (req, res) => {
    if (!req.params.idNaloga) {
        return res.status(400).json({sporocilo: "Ne najdem naloge, id naloge je obvezen!"});
    }
    Naloga.findById(req.params.idNaloga).exec((napaka, naloga) => {
        if (!naloga) {
            return res.status(404).json({sporocilo: "Ne najdem naloge!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojeco nalogo
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.naslov) {
            naloga.naslov = req.body.naslov;
        }
        if (req.body.vsebina) {
            naloga.vsebina = req.body.vsebina;
        }
        if (req.body.opravljeno) {
            naloga.opravljeno = req.body.opravljeno;
        }

        naloga.save((napaka2, naloga2) => {
            if (napaka) {
                res.status(404).json(napaka2);
            }
            else {
                res.status(200).json(naloga2);
            }
        })
    });
}

//Ustvari nalogo --> Za preverit
const ustvariNalogo = (req, res) => {
    const idIzvajalec = req.params.idIzvajalec;
    if (idIzvajalec) {
        Izvajalec.findById(idIzvajalec)
            .exec((napaka, izvajalec) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else {
                    vstaviNalogo(req, res, izvajalec);
                }
            })
    }
}

//Izbrisi nalogo z podanim id --> za preverit
const izbrisiNalogo = (req, res) => {
    const { idIzvajalec, idNaloga } = req.params;

    if (!idIzvajalec || !idNaloga) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju izvajalca ali naloge!"
        });
    }

    if (idIzvajalec) {
        Naloga.findByIdAndRemove(idNaloga).exec((napaka, naloga) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            else if (!naloga) {
                return res.status(404).json({
                    sporocilo: "Naloga z podanim id ne obstaja!"
                });
            }
            izbrisiIdNaloga(req, res, idIzvajalec, idNaloga);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Pomozne metode
const vstaviNalogo = (req, res, izvajalec) => {
    const naloga = new Naloga({
        naslov: req.body.naslov,
        vsebina: req.body.vsebina,
        opravljeno: false
    });

    //Pushamo id v tabelo naloge in shranimo
    izvajalec.naloge.push(naloga._id);
    izvajalec.save((napaka, izvajalec2) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Naloga.create(naloga, (napaka2, nalogaRes) => {
                if (napaka2) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    res.status(201).json(nalogaRes);
                }
            })
        }
    })
}
const izbrisiIdNaloga = (req, res, idIzvajalec, idNaloga) => {
    Izvajalec.findById(idIzvajalec)
    .exec((napaka, izvajalec) => {
        if (!izvajalec) {
            return res.status(404).json({ sporocilo: "Ne najdem izvajalca!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce ima izvajalec kaksno nalogo
        if (izvajalec.naloge && izvajalec.naloge.length > 0) {
            //brisanje indexa v tabeli naloge, ce le-ta obstaja
            let index = izvajalec.naloge.indexOf(idNaloga);
            if (index !== -1) {
                izvajalec.naloge.splice(index, 1);
                izvajalec.save((napaka2) => {
                    if (napaka2) {
                        return res.status(500).json(napaka2);
                    }
                    else {
                        res.status(204).json(null);
                    }
                })
            }
        }
        else {
            res.status(404).json({ sporocilo: "Ni naloge za brisanje!"});
        }
    });
}

module.exports = {
    pridobiVseNaloge,
    pridobiNalogo,
    urediNalogo,
    ustvariNalogo,
    izbrisiNalogo
}