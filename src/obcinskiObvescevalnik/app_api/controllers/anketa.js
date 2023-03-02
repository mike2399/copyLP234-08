const db = require("../models/db");
const Anketa = db.conn2.model("Anketa");
const Obcina = db.conn2.model("Obcina");
//Ce bomo implementirali kaj z anketami treba dodati se (glede na nacrt):
//mozniOdgovori(), rezultatiAnkete(), kdoJeOdgovoril()

//Pridobi vse ankete
const pridobiVseAnkete = (req, res) => {
    Anketa.find().exec((napaka, anketa) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(anketa);
    })
}

//Pridobi anketo s podanim id
const pridobiAnketo = (req, res) => {
    Anketa.findById(req.params.idAnketa).exec((napaka, anketa) => {
        if (!anketa) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem ankete z id: ${req.params.idAnketa}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(anketa);
    });
}

//ustvari anketo
const ustvariAnketo = (req, res) => {
    const idObcine = req.params.idObcina;
    if (idObcine) {
        Obcina.findById(idObcine)
            .exec((napaka, obcina) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else {
                    vstaviAnketo(req, res, obcina);
                }
            })
    }
}

//Uredi anketo z dolocenim id
const urediAnketo = (req, res) => {
    if (!req.params.idAnketa) {
        return res.status(400).json({sporocilo: "Ne najdem ankete, id ankete je obvezen!"});
    }
    Anketa.findById(req.params.idAnketa).exec((napaka, anketa) => {
        if (!anketa) {
            return res.status(404).json({sporocilo: "Ne najdem ankete!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojeco anketo
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.naslov) {
            anketa.naslov = req.body.naslov;
        }
        if (req.body.vprasanje) {
            anketa.vprasanje = req.body.vprasanje;
        }
        if (req.body.odgovori) {
            anketa.odgovori = req.body.odgovori;
        }
        if (req.body.rezultati) {
            anketa.rezultati = req.body.rezultati;
        }
        if (req.body.odgovoriliSo) {
            anketa.odgovoriliSo = req.body.odgovoriliSo;
        }

        anketa.save((napaka2, anketa2) => {
            if (napaka) {
                res.status(404).json(napaka2);
            }
            else {
                res.status(200).json(anketa2);
            }
        })
    });
}

//Izbrisi anketo z podanim id
const izbrisiAnketo = (req, res) => {
    const { idObcina, idAnketa } = req.params;

    if (!idObcina || !idAnketa) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju občine ali ankete!"
        });
    }

    if (idObcina) {
        Anketa.findByIdAndRemove(idAnketa).exec((napaka, anketa) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            else if (!anketa) {
                return res.status(404).json({
                    sporocilo: "Anketa z podanim id ne obstaja!"
                });
            }
            izbrisiIdAnkete(req, res, idObcina, idAnketa);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Pomozne metode
//Vstavljanje ankete v tabelo Obcina
const vstaviAnketo = (req, res, obcina) => {
    const anketa = new Anketa({
        naslov: req.body.naslov,
        vprasanje: req.body.vprasanje,
        odgovori: req.body.odgovori,
        rezultati: [],
        odgovoriliSo: []
    });

    //Pushamo id v tabelo ankete in shranimo
    obcina.ankete.push(anketa._id);
    obcina.save((napaka, obcina) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Anketa.create(anketa, (napaka2, anketa2) => {
                if (napaka2) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    res.status(201).json(anketa2);
                }
            })
        }
    })
}

//Brisanje ankete v tabeli Obcina
const izbrisiIdAnkete = (req, res, idObcina, idAnketa) => {
    Obcina.findById(idObcina)
    .exec((napaka, obcina) => {
        if (!obcina) {
            return res.status(404).json({ sporocilo: "Ne najdem občine!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce obcina ima kaksno anketo
        if (obcina.ankete && obcina.ankete.length > 0) {
            //brisanje indexa v tabeli ankete, ce le-ta obstaja
            let index = obcina.ankete.indexOf(idAnketa);
            if (index !== -1) {
                obcina.ankete.splice(index, 1);
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
            res.status(404).json({ sporocilo: "Ni ankete za brisanje!"});
        }
    });
}

module.exports = {
    pridobiVseAnkete,
    pridobiAnketo,
    ustvariAnketo,
    urediAnketo,
    izbrisiAnketo
}