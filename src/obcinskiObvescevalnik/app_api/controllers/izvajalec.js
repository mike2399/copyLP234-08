const db = require("../models/db");
const Izvajalec = db.conn1.model("Izvajalec");
const Obcina = db.conn2.model("Obcina");
const Predlog = db.conn2.model("Predlog");

const pridobiIzvajalce = (req, res) => {
    Izvajalec.find().exec((napaka, izvajalci) => {
        if(napaka) return res.status(500).json(napaka);
        else if(!izvajalci) return res.status(404).json("ni upravnikov");
        else res.status(200).json(izvajalci);
    });

};

const pridobiIzvajalca = (req, res) => {
    Izvajalec.findById(req.params.idIzvajalca).exec((napaka, izvajalci) => {
        if(napaka) return res.status(500).json(napaka);
        else if(!izvajalci) return res.status(404).json("ni upravnikov");
        else res.status(200).json(izvajalci);
    });

};

const pridobiPredlogeIzvajalca = (req, res) => {
    Izvajalec.findById(req.params.idIzvajalec).exec((napaka, izvajalec) => {
        if (!izvajalec) {
            return res
                .status(404)
                .json({sporocilo: `Ne najdem izvajalca z id: ${req.params.idIzvajalec}`
                });
        }
        else if (napaka) {
            return res.status(500).json({status: "Ni ok"});
        }
        Predlog.find({_id: {$in : izvajalec.naloge}}, (napaka2, predlogi) => {
            if (!predlogi) {
                return res
                    .status(404)
                    .json({sporocilo: "Ne najdem predlogov!"
                    });
            }
            else if (napaka2) {
                return res.status(500).json({status: "Napaka pri iskanju predlogov!"});
            }
            return res.status(200).json(predlogi);
        })
    });
}

const ustvariIzvajalca = (req, res) => {
    const nazivPodjetja = req.body.nazivPodjetja;
    const uporabniskoIme = req.body.uporabniskoIme;
    const geslo = req.body.geslo;
    const email = req.body.email;
    let obcineDelovanja = [];
    if(Array.isArray(req.body.obcineDelovanja)) obcineDelovanja=req.body.obcineDelovanja;
    else obcineDelovanja = req.body.obcineDelovanja.split(",") || [];
    const naloge = []
    if (!nazivPodjetja || !uporabniskoIme || !geslo || !email || !obcineDelovanja || !naloge) return res.status(400).json("manjkajoci podatki");
    else{
        izvajalec = new Izvajalec({nazivPodjetja: nazivPodjetja, uporabniskoIme: uporabniskoIme, geslo: geslo, email: email, obcineDelovanja: obcineDelovanja, naloge: naloge});
        izvajalec.nastaviGeslo(req.body.geslo);
        Izvajalec.create(izvajalec, (napaka, izvajalec)=>{
            for(let i = 0; i < obcineDelovanja.length; i++){
                Obcina.findById(obcineDelovanja[i]).exec((error,obcina)=>{
                    console.log(obcina)
                    obcina.izvajalci.push(izvajalec._id.toString())
                    obcina.save((e,o) => {
                        if(e) return res.status(500).json(e);
                    })

                })
            }
            if(napaka) return res.status(400).json(napaka);
            else return res.status(201).json(izvajalec);
        });
    }
};
// curl -X POST -d "nazivPodjetja=test&uporabniskoIme=test&geslo=password123&email=test@test.test&obcineDelovanja=628a21682c33ad649a41b0a3," -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/izvajalci

const urediIzvajalca = (req, res) => {
    if(!req.params.idIzvajalca) return res.status(400).json("id je zahtevan")
    Izvajalec.findById(req.params.idIzvajalca).exec((napaka, izvajalec)=>{
        if(!izvajalec) return res.status(404).json("not found");
        else{
            const nazivPodjetja = req.body.nazivPodjetja;
            const uporabniskoIme = req.body.uporabniskoIme;
            const geslo = req.body.geslo;
            const email = req.body.email;
            const obcineDelovanja = req.body.obcineDelovanja;
            const naloge = req.body.naloge;
            if(nazivPodjetja) izvajalec.nazivPodjetja = nazivPodjetja;
            if(uporabniskoIme) izvajalec.uporabniskoIme = uporabniskoIme;
            if(email) izvajalec.email = email;
            if(req.body.obcineDelovanja){
                if(Array.isArray(req.body.obcineDelovanja)) izvajalec.obcineDelovanja = req.body.obcineDelovanja;
                else izvajalec.obcineDelovanja = req.body.obcineDelovanja.split(",");
            }
            if(naloge) izvajalec.naloge = naloge;
            if(geslo) izvajalec.nastaviGeslo(geslo);
            izvajalec.save((napaka, urejenizvajalec)=>{
                if(napaka) return res.status(500).json(napaka);
                else return res.status(200).json(urejenizvajalec);
            });
        }
    });
};

// curl -X PUT -d "nazivPodjetja=test&uporabniskoIme=test&geslo=password123&email=test@test.test&obcineDelovanja=test1,test2,test3" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/izvajalci/:id

const izbrisiIzvajalca = (req, res) => {
    if(!req.params.idIzvajalca) return res.status(400).json("id je zahtevan");
    Izvajalec.findByIdAndRemove(req.params.idIzvajalca).exec((error)=>{
        if(error) return res.status(500).json(error);
        else return res.status(204).json(null);
    });
};

// curl -X DELETE http://localhost:3000/api/izvajalci/:id


module.exports = {pridobiIzvajalce, ustvariIzvajalca, urediIzvajalca, izbrisiIzvajalca, pridobiIzvajalca, pridobiPredlogeIzvajalca};