const db = require("../models/db");
const Predlog = db.conn2.model("Predlog");
const Obcina = db.conn2.model("Obcina");
const PrijavljeniObcan = db.conn1.model("PrijavljeniObcan");
const Administrator = db.conn1.model("Administrator");

//Pridobi vse predloge
const pridobiVsePredloge = (req, res) => {
    Predlog.find().exec((napaka, predlog) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(predlog);
    })
}

//Pridobi predlog z podanim id
const pridobiPredlog = (req, res) => {
    Predlog.findById(req.params.idPredloga).exec((napaka, predlog) => {
        if (!predlog) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem predloga z id: ${req.params.idPredloga}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(predlog);
    });
}


//Ustvari predlog
const ustvariPredlog = (req, res) => {
    if(!req.auth || req.auth._id != req.body.avtor) return res.status(401).json("unauthorized")
    const idObcine = req.params.idObcina;
    if (idObcine) {
        Obcina.findById(idObcine)
            .exec((napaka, obcina) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else if (!obcina) {
                    res.status(400).json({sporocilo: "Ne najdem obcine!"});
                }
                else {
                    vstaviPredlog(req, res, obcina);
                }
            })
    }
}

//Uredi predlog z podanim id
const urediPredlog = (req, res) => {
    if (!req.params.idPredloga) {
        return res.status(400).json({sporocilo: "Ne najdem predloga, id predloga je obvezen!"});
    }
    Predlog.findById(req.params.idPredloga).exec((napaka, predlog) => {
        if (!predlog) {
            return res.status(404).json({sporocilo: "Ne najdem predloga!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojec predlog
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.avtor) {
            predlog.avtor = req.body.avtor;
        }
        if (req.body.naslov) {
            predlog.naslov = req.body.naslov;
        }
        if (req.body.vsebina) {
            predlog.vsebina = req.body.vsebina;
        }
        if (req.body.lat) {
            predlog.lat = req.body.lat;
        }
        if (req.body.lng) {
            predlog.lng = req.body.lng;
        }
        if (req.body.opravljeno) {
            predlog.opravljeno = req.body.opravljeno;
        }

        predlog.save((napaka2, predlog2) => {
            if (napaka2) {
                res.status(404).json(napaka2);
            }
            else {
                res.status(200).json(predlog2);
            }
        })
    });
}

//Izbrisi predlog z podanim id --> NUJNO testirati
const izbrisiPredlog = (req, res) => {
    const { idObcina, idPredloga } = req.params;

    if (!idObcina || !idPredloga) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju občine ali predloga!"
        });
    }

    if (idObcina) {
        Predlog.findByIdAndRemove(idPredloga).exec((napaka, predlog) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            else if (!predlog) {
                return res.status(404).json({
                    sporocilo: "Predlog z podanim id ne obstaja!"
                });
            }
            izbrisiIdPredloga(req, res, idObcina, idPredloga, predlog.avtor);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Pomožne metode
//Vstavljanje predloga v tabelo Obcina
const vstaviPredlog = async (req, res, obcina) => {
    const predlog = new Predlog({
        avtor: req.body.avtor,
        naslov: req.body.naslov,
        vsebina: req.body.vsebina,
        lat: req.body.lat,
        lng: req.body.lng,
        opravljeno: false
    });

    //Pushamo id v tabelo predlogi in shranimo
    obcina.predlogi.push(predlog._id);
    obcina.save((napaka, obcina) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Predlog.create(predlog, async (napaka2, predlogRes) => {
                if (napaka2) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    //res.status(201).json(predlogRes);
                    let uporabnik = await PrijavljeniObcan.findById(req.params.idAvtor);
                    console.log(uporabnik);
                    if (!uporabnik) {
                        uporabnik = await Administrator.findById(req.params.idAvtor);
                    }

                    uporabnik.predlogi.push(predlog._id);
                    await uporabnik.save();
                    res.status(201).json(predlogRes);
                }
            })
        }
    })
}

//Brisanje predloga v tabeli Obcina
const izbrisiIdPredloga = (req, res, idObcina, idPredloga, avtor) => {
    Obcina.findById(idObcina)
    .exec((napaka, obcina) => {
        if (!obcina) {
            return res.status(404).json({ sporocilo: "Ne najdem občine!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce obcina ima kaksnen predlog
        if (obcina.predlogi && obcina.predlogi.length > 0) {
            //brisanje indexa v tabeli predlogi, ce le-ta obstaja
            let index = obcina.predlogi.indexOf(idPredloga);
            if (index !== -1) {
                obcina.predlogi.splice(index, 1);
                obcina.save((napaka2) => {
                    if (napaka2) {
                        return res.status(500).json(napaka2);
                    }
                    else {
                        //res.status(204).json(null);
                        izbrisiUporabnikPredlog(req, res, idPredloga, avtor);
                    }
                })
            }
        }
        else {
            res.status(404).json({ sporocilo: "Ni Predloga za brisanje!"});
        }
    });
}

const izbrisiUporabnikPredlog = async (req, res, idPredloga, avtor) => {
    let user = await PrijavljeniObcan.findById(req.params.idAvtor);
    if (!user) {
        user = await Administrator.findById(req.params.idAvtor);
    }

    let index = user.predlogi.indexOf(idPredloga);
    if (index !== -1) {
        user.predlogi.splice(index, 1);
        user.save((napaka) => {
            if (napaka) {
                res.status(500).json(napaka);
            }
            else {
                res.status(204).json(null);
            }
        })
    }
}

module.exports = {
    pridobiVsePredloge,
    pridobiPredlog,
    ustvariPredlog,
    urediPredlog,
    izbrisiPredlog
}