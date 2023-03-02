const db = require('../models/db');
const Obcina = db.conn2.model("Obcina");
const Opozorilo = db.conn2.model("Opozorilo");
const Novica = db.conn2.model("Novica");
const Predlog = db.conn2.model("Predlog");
const Anketa = db.conn2.model("Anketa");
const Izvajalec = db.conn1.model("Izvajalec");
/*
Za obcino manjkajo se: pridobiVseIzvajalce()
*/

//Pridobi vse obcine
const pridobiVseObcine = (req, res) => {
    Obcina.find().exec((napaka, obcine) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(obcine);
    })
}

//Pridobi obcino z dolocenim id
const pridobiObcino = (req, res) => {
    Obcina.findById(req.params.idObcine).exec((napaka, obcina) => {
        if (!obcina) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem obcine z id: ${req.params.idObcine}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(obcina);
    });
}

//Uredi obcino z dolocenim id
const urediObcino = (req, res) => {
    if (!req.params.idObcine) {
        return res.status(400).json({sporocilo: "Ne najdem obcine, id obcine je obvezen!"});
    }
    Obcina.findById(req.params.idObcine).exec((napaka, obcina) => {
        if (!obcina) {
            return res.status(404).json({sporocilo: "Ne najdem obcine!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojeco obcino
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.imeObcine) {
            obcina.imeObcine = req.body.imeObcine;
        }
        if (req.body.pobrateneObcine) {
            obcina.pobrateneObcine = req.body.pobrateneObcine;
        }
        if (req.body.opozorila) {
            obcina.opozorila = req.body.opozorila;
        }
        if (req.body.novice) {
            obcina.novice = req.body.novice;
        }
        if (req.body.ankete) {
            obcina.ankete = req.body.ankete;
        }
        if (req.body.datObcine) {
            obcina.datObcine = req.body.datObcine;
        }
        if (req.body.predlogi) {
            obcina.predlogi = req.body.predlogi;
        }
        if (req.body.izvajalci) {
            obcina.izvajalci = req.body.izvajalci;
        }

        obcina.save((napaka, obcina) => {
            if (napaka) {
                res.status(404).json(napaka);
            }
            else {
                res.status(200).json(obcina);
            }
        })
    });
}

//Pridobi vsa opozorila obcine z podanim id
const pridobiVsaOpozorilaObcina = (req, res) => {
    Obcina.findById(req.params.idObcina).exec((napaka, obcina) => {
        if (!obcina) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem obcine z id: ${req.params.idObcina}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Opozorilo.find({_id: {$in : obcina.opozorila}}, (napaka2, opozorila) => {
            if (!opozorila) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem opozoril v tej obcini!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju opozoril!"});
            }
            return res.status(200).json(opozorila);
        })
    });
}

//Pridobi vse novice obcine z podanim id
const pridobiVseNoviceObcina = (req, res) => {
    Obcina.findById(req.params.idObcina).exec((napaka, obcina) => {
        if (!obcina) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem obcine z id: ${req.params.idObcina}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Novica.find({_id: {$in : obcina.novice}}, (napaka2, novice) => {
            if (!novice) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem novic v tej obcini!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju novic!"});
            }
            return res.status(200).json(novice);
        })
    });
}

//Pridobi vse predloge obcine z podanim id
const pridobiVsePredlogeObcina = (req, res) => {
    Obcina.findById(req.params.idObcina).exec((napaka, obcina) => {
        if (!obcina) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem obcine z id: ${req.params.idObcina}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Predlog.find({_id: {$in : obcina.predlogi}}, (napaka2, predlogi) => {
            if (!predlogi) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem predlogov v tej obcini!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju predlogov!"});
            }
            return res.status(200).json(predlogi);
        })
    });
}

//Pridobi vse ankete obcine z podanim id
const pridobiVseAnketeObcina = (req, res) => {
    Obcina.findById(req.params.idObcina).exec((napaka, obcina) => {
        if (!obcina) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem obcine z id: ${req.params.idObcina}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Anketa.find({_id: {$in : obcina.ankete}}, (napaka2, ankete) => {
            if (!ankete) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem anket v tej obcini!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju anket!"});
            }
            return res.status(200).json(ankete);
        })
    });
}

//Ustvari obcino
const ustvariObcino = (req, res) => {
    const obcina = new Obcina({
        imeObcine: req.body.imeObcine,
        datObcine: req.body.datObcine,
        pobrateneObcine: [],
        opozorila: [],
        novice: [],
        ankete: [],
        predlogi: [],
        izvajalci: []
    });

    obcina.save((napaka, obcina2) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            res.status(201).json(obcina2);
        }
    });
}

//Pridobi vse izvajalce obcine z podanim id --> Ni stestirano
const pridobiVseIzvajalceObcina = (req, res) => {
    Obcina.findById(req.params.idObcina).exec((napaka, obcina) => {
        if (!obcina) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem obcine z id: ${req.params.idObcina}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Izvajalec.find({_id: {$in : obcina.izvajalci}}, (napaka2, izvajalci) => {
            if (!izvajalci) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem izvajalcev v tej obcini!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju izvajalcev!"});
            }
            return res.status(200).json(izvajalci);
        })
    });
}

module.exports = {
    pridobiVseObcine,
    pridobiObcino,
    urediObcino,
    pridobiVsaOpozorilaObcina,
    ustvariObcino,
    pridobiVseNoviceObcina,
    pridobiVsePredlogeObcina,
    pridobiVseAnketeObcina,
    pridobiVseIzvajalceObcina
}