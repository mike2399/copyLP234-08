const db = require("../models/db");
const Upravnik = db.conn1.model("Upravnik");

const pridobiUpravnike = (req, res) => {
    Upravnik.find().exec((napaka, upravniki) => {
        if(napaka) return res.status(500).json(napaka);
        else if(!upravniki) return res.status(404).json("ni upravnikov");
        else res.status(200).json(upravniki);
    });
};



const ustvariUpravnika = (req, res) => {
    const imeObcine = req.body.imeObcine;
    const uporabniskoIme = req.body.uporabniskoIme;
    const geslo = req.body.geslo;
    const email = req.body.email;
    const obcina = req.body.obcina;
    if (!imeObcine || !uporabniskoIme || !geslo || !email || !obcina) return res.status(400).json("manjkajoci podatki");
    else{
        upravnik = new Upravnik({imeObcine: imeObcine, uporabniskoIme: uporabniskoIme, geslo: geslo, email: email, obcina: obcina});
        upravnik.nastaviGeslo(req.body.geslo);
        Upravnik.create(upravnik, (napaka, upravnik)=>{
            if(napaka) return res.status(400).json(napaka);
            else return res.status(201).json(upravnik);
        });
    }
};
// curl -X POST -d "imeObcine=test&uporabniskoIme=test&geslo=password123&email=test@test.test&obcina=test" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/upravniki


const urediUpravnika = (req, res) => {
    if(!req.params.idUpravnika) return res.status(400).json("id je zahtevan")
    Upravnik.findById(req.params.idUpravnika).exec((napaka, upravnik)=>{
        if(!upravnik) return res.status(404).json("not found");
        else{
            const imeObcine = req.body.imeObcine;
            const uporabniskoIme = req.body.uporabniskoIme;
            const geslo = req.body.geslo;
            const email = req.body.email;
            const obcina = req.body.obcina;
            if(imeObcine) upravnik.imeObcine = imeObcine;
            if(uporabniskoIme) upravnik.uporabniskoIme = uporabniskoIme;
            if(email) upravnik.email = email;
            if(geslo) upravnik.nastaviGeslo(geslo);
            if(obcina) upravnik.obcina = obcina;
            upravnik.save((napaka, urejenupravnik)=>{
                if(napaka) return res.status(500).json(napaka);
                else return res.status(200).json(urejenupravnik);
            });
        }
    });
}

// curl -X PUT -d "imeObcine=test&uporabniskoIme=test&geslo=password1234&email=test@test.test&obcina=test" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/upravniki/:id

const izbrisiUpravnika = (req, res) =>{
    if(!req.params.idUpravnika) return res.status(400).json("id je zahtevan");
    Upravnik.findByIdAndRemove(req.params.idUpravnika).exec((error)=>{
        if(error) return res.status(500).json(error);
        else return res.status(204).json(null);
    });
}

// curl -X DELETE http://localhost:3000/api/upravniki/:id

module.exports = {pridobiUpravnike, ustvariUpravnika, urediUpravnika, izbrisiUpravnika}