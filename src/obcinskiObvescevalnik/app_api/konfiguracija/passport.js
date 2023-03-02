const passport = require("passport");
const LokalnaStrategija = require("passport-local").Strategy;
const mongoose = require("mongoose");
const db = require("../models/db");
const Administrator = db.conn1.model("Administrator");
const Upravnik = db.conn1.model("Upravnik");
const Izvajalec = db.conn1.model("Izvajalec");
const PrijavljenObcan = db.conn1.model("PrijavljeniObcan");


passport.use(
    new LokalnaStrategija(
        {
            usernameField: "uporabniskoIme",
            passwordField: "geslo",
        },
        (uporabniskoIme, geslo, pkKoncano) => {
            Administrator.findOne(
                { uporabniskoIme: uporabniskoIme },
                (napaka, uporabnik) => {
                    if (napaka) return pkKoncano(napaka);
                    else if (!uporabnik)
                        Upravnik.findOne(
                            { uporabniskoIme: uporabniskoIme },
                            (napaka, uporabnik) => {
                                if (napaka) return pkKoncano(napaka);
                                else if (!uporabnik)
                                    PrijavljenObcan.findOne(
                                        { uporabniskoIme: uporabniskoIme },
                                        (napaka, uporabnik) => {
                                            if (napaka) return pkKoncano(napaka);
                                            else if (!uporabnik)
                                                Izvajalec.findOne(
                                                    { uporabniskoIme: uporabniskoIme },
                                                    (napaka, uporabnik) => {
                                                        if (napaka) return pkKoncano(napaka);
                                                        else if (!uporabnik)
                                                            return pkKoncano(null, false, {
                                                                sporočilo: "Napačno uporabniško ime.",
                                                            });
                                                        if (!uporabnik.preveriGeslo(geslo))
                                                            return pkKoncano(null, false, { sporočilo: "Napačno geslo." });
                                                        else return pkKoncano(null, uporabnik);
                                                    }
                                                );
                                            else if (!uporabnik.preveriGeslo(geslo))
                                                return pkKoncano(null, false, { sporočilo: "Napačno geslo." });
                                            else return pkKoncano(null, uporabnik);
                                        }
                                    );
                                else if (!uporabnik.preveriGeslo(geslo))
                                    return pkKoncano(null, false, { sporočilo: "Napačno geslo." });
                                else return pkKoncano(null, uporabnik);
                            }
                        );
                    else if (!uporabnik.preveriGeslo(geslo))
                        return pkKoncano(null, false, { sporočilo: "Napačno geslo." });
                    else return pkKoncano(null, uporabnik);
                }
            );
        }
    )
);

//curl -X POST -d "uporabniskoIme=test&geslo=password123" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/prijava
