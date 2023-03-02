const db = require("../models/db");
const PrijavljenObcan = db.conn1.model("PrijavljeniObcan");


const pridobiPrijavljeneObcane = (req, res) => {
    PrijavljenObcan.find().exec((napaka, prijavljeniObcani) => {
        if(napaka) return res.status(500).json(napaka)
        else if(!prijavljeniObcani) return res.status(404).json("ni prijavljenih obcanov")
        else res.status(200).json(prijavljeniObcani)
    })
};

const ustvariPrijavljenegaObcana = (req, res) => {
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
        po = new PrijavljenObcan({uporabniskoIme : uporabniskoIme, email: email, ime: ime, priimek: priimek, geslo: geslo, rojstvo: rojstvo, obcine: obcine, predlogi: predlogi, blokiran: blokiran});
        po.nastaviGeslo(req.body.geslo);
        PrijavljenObcan.create(po, (napaka, obcan)=>{
            if(napaka) return res.status(400).json(napaka);
            else return res.status(201).json(obcan);
        });
    }
};
// curl -X POST -d "uporabniskoIme=test&email=test@test.test&ime=test&priimek=test&geslo=password1234&rojstvo=1889-04-20" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/prijavljeniObcani

const urediPrijavljenegaObcana = (req, res) => {
    if(!req.params.idPrijavljenegaObcana) return res.status(400).json("id je zahtevan")
    PrijavljenObcan.findById(req.params.idPrijavljenegaObcana).exec((napaka, po)=>{
        if(!po) return res.status(404).json("not found");
        else{
            const uporabniskoIme = req.body.uporabniskoIme;
            const email = req.body.email;
            const ime = req.body.ime;
            const priimek = req.body.priimek;
            const geslo = req.body.geslo;
            const rojstvo = req.body.rojstvo;
            if(uporabniskoIme) po.uporabniskoIme = uporabniskoIme;
            if(email) po.email = email;
            if(ime) po.ime = ime;
            if(priimek) po.priimek = priimek;
            if(geslo) po.nastaviGeslo(geslo);
            if(rojstvo) po.rojstvo = rojstvo;
            if(req.body.obcine){
                if(Array.isArray(req.body.obcine)) po.obcine = req.body.obcine;
                else po.obcine = req.body.obcine.split(",");
            }
            po.save((napaka, urejenpo)=>{
                if(napaka) return res.status(500).json(napaka);
                else return res.status(200).json(urejenpo);
            });
        }
    });
}

// curl -X PUT -d "uporabniskoIme=test&email=test@test.test&ime=test&priimek=test&geslo=password123&rojstvo=1889-04-20" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/prijavljeniObcani/:id

const izbrisiPrijavljenegaObcana = (req, res) =>{
    if(!req.params.idPrijavljenegaObcana) return res.status(400).json("id je zahtevan");
    PrijavljenObcan.findByIdAndRemove(req.params.idPrijavljenegaObcana).exec((error)=>{
        if(error) return res.status(500).json(error);
        else return res.status(204).json(null);
    });
}

// curl -X DELETE http://localhost:3000/api/prijavljeniObcani/:id

module.exports = {pridobiPrijavljeneObcane, ustvariPrijavljenegaObcana, urediPrijavljenegaObcana, izbrisiPrijavljenegaObcana}