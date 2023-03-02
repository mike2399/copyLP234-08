const db = require("../models/db");
const Administrator = db.conn1.model("Administrator");


const pridobiAdministratorje = (req, res) => {
    Administrator.find().exec((napaka, administratorji) => {
        if(napaka) return res.status(500).json(napaka)
        else if(!administratorji) return res.status(404).json("ni administratorjev")
        else res.status(200).json(administratorji)
    })
};

const ustvariAdministratorja = (req, res) => {
    const uporabniskoIme = req.body.uporabniskoIme;
    const email = req.body.email;
    const ime = req.body.ime;
    const priimek = req.body.priimek;
    const geslo = req.body.geslo;
    const rojstvo = req.body.rojstvo;
    let obcine = []
    if(Array.isArray(req.body.obcine)) obcine = req.body.obcine;
    else obcine = req.body.obcine.split(",") || [];
    const predlogi = []
    const blokiran = false;
    if (!uporabniskoIme || !email || !ime || !priimek || !geslo || !rojstvo || !obcine || !predlogi) return res.status(400).json("manjkajoci podatki");
    else{
        admin = new Administrator({uporabniskoIme : uporabniskoIme, email: email, ime: ime, priimek: priimek, geslo: geslo, rojstvo: rojstvo, obcine: obcine, predlogi: predlogi, blokiran: blokiran});
        admin.nastaviGeslo(req.body.geslo);
        Administrator.create(admin, (napaka, adm)=>{
            if(napaka) return res.status(400).json(napaka);
            else return res.status(201).json(adm);
        });
    }
};
// curl -X POST -d "uporabniskoIme=admin&email=test@test.test&ime=test&priimek=test&geslo=password123&rojstvo=1889-04-20" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/administratorji

const urediAdministratorja = (req, res) => {
    if(!req.params.idAdministratorja) return res.status(400).json("id je zahtevan")
    Administrator.findById(req.params.idAdministratorja).exec((napaka, adm)=>{
        if(!adm) return res.status(404).json("not found");
        else{
            const uporabniskoIme = req.body.uporabniskoIme;
            const email = req.body.email;
            const ime = req.body.ime;
            const priimek = req.body.priimek;
            const geslo = req.body.geslo;
            const rojstvo = req.body.rojstvo;
            if(uporabniskoIme) adm.uporabniskoIme = uporabniskoIme;
            if(email) adm.email = email;
            if(ime) adm.ime = ime;
            if(priimek) adm.priimek = priimek;
            if(geslo) adm.nastaviGeslo(geslo);
            if(rojstvo) adm.rojstvo = rojstvo;
            if(req.body.obcine){
                if(Array.isArray(req.body.obcine)) adm.obcine = req.body.obcine;
                else adm.obcine = req.body.obcine.split(",");
            }
            adm.save((napaka, urejenadm)=>{
                if(napaka) return res.status(500).json(napaka);
                else return res.status(200).json(urejenadm);
            });
        }
    });
}

// curl -X PUT -d "uporabniskoIme=test&email=test@test.test&ime=test&priimek=test&geslo=password123&rojstvo=1889-04-20" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/administratorji/:id

const izbrisiAdministratorja = (req, res) =>{
    if(!req.params.idAdministratorja) return res.status(400).json("id je zahtevan");
    Administrator.findByIdAndRemove(req.params.idAdministratorja).exec((error)=>{
        if(error) return res.status(500).json(error);
        else return res.status(204).json(null);
    });
}

// curl -X DELETE http://localhost:3000/api/administratorji/:id

module.exports = {pridobiAdministratorje, ustvariAdministratorja, urediAdministratorja, izbrisiAdministratorja}