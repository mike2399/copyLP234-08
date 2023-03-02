const passport = require("passport");
const mongoose = require("mongoose");

const prijava = (req, res) => {
    if (!req.body.uporabniskoIme || !req.body.geslo)
        return res.status(400).json("manjkajoči podatki");
    else passport.authenticate("local", (napaka, uporabnik, informacije) => {
        if (napaka) return res.status(500).json(napaka);
        else if(informacije) return res.status(400).json(informacije);
        else if (uporabnik) return res.status(200).json({ žeton: uporabnik.generirajJwt()});
        
    })(req, res);
};

module.exports = {
    prijava
};
