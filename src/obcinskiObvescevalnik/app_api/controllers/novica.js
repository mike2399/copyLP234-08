const db = require("../models/db");
const Novica = db.conn2.model("Novica");
const Obcina = db.conn2.model("Obcina");
const Komentar = db.conn2.model("Komentar");
const Opozorilo = db.conn2.model("Opozorilo");

//Pridobi vse novice
const pridobiVseNovice = (req, res) => {
    Novica.find().exec((napaka, novica) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(novica);
    })
}

//Pridobi novico z podanim id
const pridobiNovico = (req, res) => {
    Novica.findById(req.params.idNovica).exec((napaka, novica) => {
        if (!novica) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem novice z id: ${req.params.idNovica}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(novica);
    });
}

//Pridobi komentarje novice z podanim id
const pridobiKomentarjeNovica = (req, res) => {
    Novica.findById(req.params.idNovica).exec((napaka, novica) => {
        if (!novica) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem novice z id: ${req.params.idNovica}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Komentar.find({_id: {$in : novica.komentarji}}, (napaka2, komentarji) => {
            if (!komentarji) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem komentarjev v tej novici!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju novice!"});
            }
            return res.status(200).json(komentarji);
        })
    });
}

//Pridobi komentarje opozorila z podanim id
const pridobiKomentarjeOpozorila = (req, res) => {
    Opozorilo.findById(req.params.idOpozorilo).exec((napaka, opozorilo) => {
        if (!opozorilo) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem opozorila z id: ${req.params.idOpozorilo}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Komentar.find({_id: {$in : opozorilo.komentarji}}, (napaka2, komentarji) => {
            if (!komentarji) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem komentarjev v tem opozorilu!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju opozorila!"});
            }
            return res.status(200).json(komentarji);
        })
    });
}

//Ustvari novico
const ustvariNovico = (req, res) => {
    const idObcine = req.params.idObcina;
    if (idObcine) {
        Obcina.findById(idObcine)
            .exec((napaka, obcina) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else {
                    vstaviNovico(req, res, obcina);
                }
            })
    }
}

//Uredi novico z podanim id
const urediNovico = (req, res) => {
    if (!req.params.idNovica) {
        return res.status(400).json({sporocilo: "Ne najdem novice, id novice je obvezen!"});
    }
    Novica.findById(req.params.idNovica).exec((napaka, novica) => {
        if (!novica) {
            return res.status(404).json({sporocilo: "Ne najdem novice!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojeco novico
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.naslov) {
            novica.naslov = req.body.naslov;
        }
        if (req.body.vsebina) {
            novica.vsebina = req.body.vsebina;
        }
        if (req.body.komentarji) {
            novica.komentarji = req.body.komentarji;
        }

        novica.save((napaka2, novica2) => {
            if (napaka2) {
                res.status(404).json(napaka2);
            }
            else {
                res.status(200).json(novica2);
            }
        })
    });
}

//Izbrisi novico z podanim id
const izbrisiNovico = (req, res) => {
    const { idObcina, idNovica } = req.params;

    if (!idObcina || !idNovica) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju občine ali novice!"
        });
    }

    if (idObcina) {
        Novica.findByIdAndRemove(idNovica).exec((napaka, novica) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            else if (!novica) {
                return res.status(404).json({
                    sporocilo: "Novica z podanim id ne obstaja!"
                });
            }
            izbrisiIdNovica(req, res, idObcina, idNovica);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Pomozne metode
//Vstavljanje novice v tabelo Obcina
const vstaviNovico = (req, res, obcina) => {
    const novica = new Novica({
        naslov: req.body.naslov,
        vsebina: req.body.vsebina,
        komentarji: []
    });

    //Pushamo id v tabelo novice in shranimo
    obcina.novice.push(novica._id);
    obcina.save((napaka, obcina) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Novica.create(novica, (napaka2, novicaRes) => {
                if (napaka2) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    res.status(201).json(novicaRes);
                }
            })
        }
    })
}

//Brisanje opozorila v tabeli Obcina
const izbrisiIdNovica = (req, res, idObcina, idNovica) => {
    Obcina.findById(idObcina)
    .exec((napaka, obcina) => {
        if (!obcina) {
            return res.status(404).json({ sporocilo: "Ne najdem občine!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce obcina ima kaksno novico
        if (obcina.novice && obcina.novice.length > 0) {
            //brisanje indexa v tabeli novice, ce le-ta obstaja
            let index = obcina.novice.indexOf(idNovica);
            if (index !== -1) {
                obcina.novice.splice(index, 1);
                obcina.save((napaka2) => {
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
            res.status(404).json({ sporocilo: "Ni novice za brisanje!"});
        }
    });
}

module.exports = {
    pridobiVseNovice,
    pridobiNovico,
    ustvariNovico,
    urediNovico,
    izbrisiNovico,
    pridobiKomentarjeNovica,
    pridobiKomentarjeOpozorila
}