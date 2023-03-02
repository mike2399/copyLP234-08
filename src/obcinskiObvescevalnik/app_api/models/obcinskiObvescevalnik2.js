const mongoose = require('mongoose');

const Obcina = new mongoose.Schema({
    imeObcine: {type: String, required: true},
    datObcine: {type: String, required: true},
    pobrateneObcine: {type: Array, required: true},
    opozorila: {type: Array, required: true},
    novice: {type: Array, required: true},
    ankete: {type: Array, required: true},
    predlogi: {type: Array, required: true},
    izvajalci: {type: Array, required: true}
});

const Opozorilo = new mongoose.Schema({
    naslov: {type: String, required: true},
    vsebina: {type: String, required: true},
    komentarji: {type: Array, required: true}
});

const Novica = new mongoose.Schema({
    naslov: {type: String, required: true},
    vsebina: {type: String, required: true},
    komentarji: {type: Array, required: true}
});

const Predlog = new mongoose.Schema({
    //Gre za _id avtorja, ki je v drugi bazi. Verjetno najlazje shraniti kot String? Mogoce lazje kot ObjectId?
    avtor: {type: String, required: true},
    naslov: {type: String, required: true},
    vsebina: {type: String, required: true},
    lat: {type: Number, required: false},
    lng: {type: Number, required: false},
    opravljeno: {type: Boolean, required: true}
});

const Anketa = new mongoose.Schema({
    naslov: {type: String, required: true},
    vprasanje: {type: String, required: true},
    odgovori: {type: Array, required: true},
    rezultati: {type: Array, required: true},
    odgovoriliSo: {type: Array, required: true}
});

const Naloga = new mongoose.Schema({
    naslov: {type: String, required: true},
    vsebina: {type: String, required: true},
    opravljeno: {type: Boolean, required: true, default: false}
});

const Komentar = new mongoose.Schema({
    //Enako vprasanje kot pri shemi Predlog
    avtor: {type: String, required: true},
    vsebina: {type: String, required: true}
});

module.exports = {
    Obcina,
    Opozorilo,
    Novica,
    Predlog,
    Anketa,
    Naloga,
    Komentar
}