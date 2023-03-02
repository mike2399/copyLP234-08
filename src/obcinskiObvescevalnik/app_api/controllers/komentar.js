const db = require("../models/db");
const Komentar = db.conn2.model("Komentar");
const Opozorilo = db.conn2.model("Opozorilo");
const Novica = db.conn2.model("Novica");

//Pridobi vse komentarje
const pridobiVseKomentarje = (req, res) => {
    Komentar.find().exec((napaka, komentar) => {
        if (napaka) {
            return res.status(500).json(napaka);
        }
        res.status(200).json(komentar);
    })
}

//Pridobi komentar s podanim id
const pridobiKomentar = (req, res) => {
    Komentar.findById(req.params.idKomentar).exec((napaka, komentar) => {
        if (!komentar) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem komentarja z id: ${req.params.idKomentar}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        return res.status(200).json(komentar);
    });
}

//Ustvari komentar za opozorilo
const ustvariKomentarOpozorilo = (req, res) => {
    const idOpozorilo = req.params.idOpozorilo;
    if (idOpozorilo) {
        Opozorilo.findById(idOpozorilo)
            .exec((napaka, opozorilo) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else {
                    vstaviKomentarOpozorilo(req, res, opozorilo);
                }
            })
    }
}

//Ustvari komentar za novico
const ustvariKomentarNovica = (req, res) => {
    const idNovica = req.params.idNovica;
    if (idNovica) {
        Novica.findById(idNovica)
            .exec((napaka, novica) => {
                if (napaka) {
                    res.status(400).json(napaka);
                }
                else {
                    vstaviKomentarNovica(req, res, novica);
                }
            })
    }
}

//Posodobi komentar
const urediKomentar = (req, res) => {
    if (!req.params.idKomentar) {
        return res.status(400).json({sporocilo: "Ne najdem komentarja, id komentarja je obvezen!"});
    }
    Komentar.findById(req.params.idKomentar).exec((napaka, komentar) => {
        if (!komentar) {
            return res.status(404).json({sporocilo: "Ne najdem komentarja!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }

        //Shranjevanje novih podatkov v ze obstojec komentar
        //If stavki zato, da ni vedno potrebno prenašati vseh podatkov
        if (req.body.avtor) {
            komentar.avtor = req.body.avtor;
        }
        if (req.body.vsebina) {
            komentar.vsebina = req.body.vsebina;
        }

        komentar.save((napaka2, novikomentar) => {
            if (napaka2) {
                res.status(404).json(napaka2);
            }
            else {
                res.status(200).json(novikomentar);
            }
        })
    });
}

//Izbrisi komentar novice
const izbrisiKomentarNovica = (req, res) => {
    const { idKomentar, idNovica } = req.params;

    if (!idKomentar || !idNovica) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju komentarja ali novice!"
        });
    }

    if (idKomentar) {
        Komentar.findByIdAndRemove(idKomentar).exec((napaka, komentar) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            else if (!komentar) {
                return res.status(404).json({
                    sporocilo: "Komentar z podanim id ne obstaja!"
                });
            }
            izbrisiIdKomentarNovica(req, res, idKomentar, idNovica);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Izbrisi komentar opozorila
const izbrisiKomentarOpozorilo = (req, res) => {
    const { idKomentar, idOpozorilo } = req.params;

    if (!idKomentar || !idOpozorilo) {
        return res.status(404).json({
            sporocilo: "Napaka pri iskanju komentarja ali opozorila!"
        });
    }

    if (idKomentar) {
        Komentar.findByIdAndRemove(idKomentar).exec((napaka, komentar) => {
            if (napaka) {
                return res.status(500).json(napaka);
            }
            else if (!komentar) {
                return res.status(404).json({
                    sporocilo: "Komentar z podanim id ne obstaja!"
                });
            }
            izbrisiIdKomentarOpozorilo(req, res, idKomentar, idOpozorilo);
        });
    }
    else {
        res.status(404).json({sporocilo: "Neuspesno!"});
    }
}

//Pomozne metode
//Vstavljanje komentarja v Opozorilo
const vstaviKomentarOpozorilo = (req, res, opozorilo) => {
    const komentar = new Komentar({
        avtor: req.body.avtor,
        vsebina: req.body.vsebina,
    });

    //Pushamo id v tabelo novice in shranimo
    opozorilo.komentarji.push(komentar._id);
    opozorilo.save((napaka, opozorilo2) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Komentar.create(komentar, (napaka2, komentarRes) => {
                if (napaka2) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    res.status(201).json(komentarRes);
                }
            })
        }
    })
}

//Vstavljanje komentarja v Novico
const vstaviKomentarNovica = (req, res, novica) => {
    const komentar = new Komentar({
        avtor: req.body.avtor,
        vsebina: req.body.vsebina,
    });

    //Pushamo id v tabelo novice in shranimo
    novica.komentarji.push(komentar._id);
    novica.save((napaka, opozorilo2) => {
        if (napaka) {
            res.status(400).json(napaka);
        }
        else {
            Komentar.create(komentar, (napaka2, komentarRes) => {
                if (napaka2) {
                    res.status(400).json({status: "Pojavila se je napaka!"});
                }
                else {
                    res.status(201).json(komentarRes);
                }
            })
        }
    })
}

//brisanje komentarja v tabeli komentarji znotraj Novice
const izbrisiIdKomentarNovica = (req, res, idKomentar, idNovica) => {
    Novica.findById(idNovica)
    .exec((napaka, novica) => {
        if (!novica) {
            return res.status(404).json({ sporocilo: "Ne najdem novice!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce novica ima kaksen komentar
        if (novica.komentarji && novica.komentarji.length > 0) {
            //brisanje indexa v tabeli novice, ce le-ta obstaja
            let index = novica.komentarji.indexOf(idKomentar);
            if (index !== -1) {
                novica.komentarji.splice(index, 1);
                novica.save((napaka2) => {
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
            res.status(404).json({ sporocilo: "Ni komentarja za brisanje!"});
        }
    });
}

//brisanje komentarja v tabeli komentarji znotraj Opozorila
const izbrisiIdKomentarOpozorilo = (req, res, idKomentar, idOpozorilo) => {
    Opozorilo.findById(idOpozorilo)
    .exec((napaka, opozorilo) => {
        if (!opozorilo) {
            return res.status(404).json({ sporocilo: "Ne najdem opozorila!"});
        }
        else if (napaka) {
            return res.status(500).json(napaka);
        }
        
        //Preverimo ce opozorilo ima kaksen komentar
        if (opozorilo.komentarji && opozorilo.komentarji.length > 0) {
            //brisanje indexa v tabeli opozorilo, ce le-ta obstaja
            let index = opozorilo.komentarji.indexOf(idKomentar);
            if (index !== -1) {
                opozorilo.komentarji.splice(index, 1);
                opozorilo.save((napaka2) => {
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
            res.status(404).json({ sporocilo: "Ni komentarja za brisanje!"});
        }
    });
}

module.exports = {
    pridobiVseKomentarje,
    pridobiKomentar,
    ustvariKomentarOpozorilo,
    ustvariKomentarNovica,
    urediKomentar,
    izbrisiKomentarNovica,
    izbrisiKomentarOpozorilo
}