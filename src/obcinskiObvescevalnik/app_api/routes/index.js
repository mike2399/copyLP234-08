const express = require("express");
const { expressjwt: jwt } = require("express-jwt");const router = express.Router();
const ctrlObcine = require("../controllers/obcina");
const ctrlOpozorila = require("../controllers/opozorilo");
const ctrlNovice = require("../controllers/novica");
const ctrlPredlogi = require("../controllers/predlog");
const ctrlAnkete = require("../controllers/anketa");
const ctrlNaloge = require("../controllers/naloga");
const ctrlKomentarji = require("../controllers/komentar");
const ctrlTestni = require("../controllers/zacetniPodatkiObcine")

const ctrlPrijavljeniObcan = require("../controllers/prijavljenObcan");
const ctrlUpravnik = require("../controllers/upravnik");
const ctrlIzvajalec = require("../controllers/izvajalec");
const ctrlAdministrator = require("../controllers/administrator");
const ctrlAvtentikacija = require("../controllers/avtentikacija");

const avtentikacija = jwt({
    secret: "password123",
    userProperty: "payload",
    algorithms: ["HS256"],
})

//Vnos testnih podatkov
router.post(
    "/testni",
    ctrlTestni.dodajObcine
);

//Brisanje testnih podatkov
router.delete(
    "/testni/brisi",
    ctrlTestni.brisi
);


//<---- OBCINA ---->
//Pridobi vse obcine
router.get(
    "/obcine",
    ctrlObcine.pridobiVseObcine
);

//Pridobi obcino z id idObcine
router.get(
    "/obcine/:idObcine",
    ctrlObcine.pridobiObcino
);

//Ustvari obcino
router.post(
    "/obcine",
    ctrlObcine.ustvariObcino
);

//Posodobi obcino z id idObcine
router.put(
    "/obcine/:idObcine",
    avtentikacija,
    ctrlObcine.urediObcino
);

//Pridobi vsa opozorila obcine z podanim id
router.get(
    "/obcine/:idObcina/opozorila",
    ctrlObcine.pridobiVsaOpozorilaObcina
);

//Pridobi vse novice obcine z podanim id
router.get(
    "/obcine/:idObcina/novice",
    ctrlObcine.pridobiVseNoviceObcina
);

//Pridobi vse predloge obcine z podanim id
router.get(
    "/obcine/:idObcina/predlogi",
    ctrlObcine.pridobiVsePredlogeObcina
);

//Pridobi vse ankete obcine z podanim id
router.get(
    "/obcine/:idObcina/ankete",
    ctrlObcine.pridobiVseAnketeObcina
);

//Pridobi vse izvajalce obcine z podanim id
router.get(
    "/obcine/:idObcina/izvajalci",
    ctrlObcine.pridobiVseIzvajalceObcina
);

//<---- OPOZORILO ---->
//Pridobi vsa opozorila
router.get(
    "/opozorila",
    ctrlOpozorila.pridobiVsaOpozorila
);

//Pridobi opozorilo z dolocenim id
router.get(
    "/opozorila/:idOpozorila",
    ctrlOpozorila.pridobiOpozorilo
)

//Posodobi opozorilo z dolocenim id
router.put(
    "/opozorila/:idOpozorila",
    avtentikacija,
    ctrlOpozorila.urediOpozorilo
)

//Ustvari opozorilo
router.post(
    "/opozorila/:idObcine",
    avtentikacija,
    ctrlOpozorila.ustvariOpozorilo
)

//Izbrisi opozorilo
router.delete(
    "/opozorila/:idObcina/:idOpozorila",
    avtentikacija,
    ctrlOpozorila.izbrisiOpozorilo
);

//<---- NOVICA ---->
//Pridobi vse novice
router.get(
    "/novice",
    ctrlNovice.pridobiVseNovice
);

//Pridobi novico z podanim id
router.get(
    "/novice/:idNovica",
    ctrlNovice.pridobiNovico
);

//Pridobi komentarje novice z podanim id
router.get(
    "/novice/:idNovica/komentarji",
    ctrlNovice.pridobiKomentarjeNovica
);

//Pridobi komentarje opozorila z podanim id
router.get(
    "/opozorila/:idOpozorilo/komentarji",
    ctrlNovice.pridobiKomentarjeOpozorila
);

//Ustvari novico
router.post(
    "/novice/:idObcina",
    avtentikacija,
    ctrlNovice.ustvariNovico
);

//uredi novico z podanim id
router.put(
    "/novice/:idNovica",
    avtentikacija,
    ctrlNovice.urediNovico
);

//Izbrisi novico z podanim id
router.delete(
    "/novice/:idObcina/:idNovica",
    avtentikacija,
    ctrlNovice.izbrisiNovico
);

//<---- PREDLOG ---->
//Pridobi vse predloge
router.get(
    "/predlogi",
    ctrlPredlogi.pridobiVsePredloge
);

//Pridobi predlog z podanim id
router.get(
    "/predlogi/:idPredloga",
    ctrlPredlogi.pridobiPredlog
);

//Ustvari predlog
router.post(
    "/predlogi/:idObcina/:idAvtor",
    avtentikacija,
    ctrlPredlogi.ustvariPredlog
);

//Uredi predlog
router.put(
    "/predlogi/:idPredloga",
    avtentikacija,
    ctrlPredlogi.urediPredlog
);

//Izbrisi predlog z podanim id
router.delete(
    "/predlogi/:idObcina/:idPredloga/:idAvtor",
    avtentikacija,
    ctrlPredlogi.izbrisiPredlog
);

//<---- ANKETA ---->
//Pridobi vse ankete
router.get(
    "/ankete",
    ctrlAnkete.pridobiVseAnkete
);

//Pridobi anketo s podanim id
router.get(
    "/ankete/:idAnketa",
    ctrlAnkete.pridobiAnketo
)

//Ustvari anketo
router.post(
    "/ankete/:idObcina",
    avtentikacija,
    ctrlAnkete.ustvariAnketo
);

//Uredi anketo
router.put(
    "/ankete/:idAnketa",
    avtentikacija,
    ctrlAnkete.urediAnketo
);

//Izbrisi anketo
router.delete(
    "/ankete/:idObcina/:idAnketa",
    avtentikacija,
    ctrlAnkete.izbrisiAnketo
);

//<---- NALOGA ---->
//Pridobi vse naloge
router.get(
    "/naloge",
    ctrlNaloge.pridobiVseNaloge
);

//Pridobi nalogo z podanim id
router.get(
    "/naloge/:idNaloga",
    ctrlNaloge.pridobiNalogo
);

//Ustvari nalogo
router.post(
    "/naloge/:idIzvajalec",
    avtentikacija,
    ctrlNaloge.ustvariNalogo
)

//Uredi nalogo
router.put(
    "/naloge/:idNaloga",
    avtentikacija,
    ctrlNaloge.urediNalogo
);

//Izbrisi nalogo
router.delete(
    "/naloge/:idIzvajalec/:idNaloga",
    avtentikacija,
    ctrlNaloge.izbrisiNalogo
)

//<---- KOMENTAR ---->
//Pridobi vse komentarje

router.get(
    "/komentarji",
    ctrlKomentarji.pridobiVseKomentarje
);

//Pridobi komentar s podanim id
router.get(
    "/komentarji/:idKomentar",
    ctrlKomentarji.pridobiKomentar
);

//Ustvari komentar za opozorilo
router.post(
    "/komentarji/opozorila/:idOpozorilo",
    avtentikacija,
    ctrlKomentarji.ustvariKomentarOpozorilo
);

//Ustvari komentar za novico
router.post(
    "/komentarji/novice/:idNovica",
    avtentikacija,
    ctrlKomentarji.ustvariKomentarNovica
);
//Posodobi komentar
router.put(
    "/komentarji/:idKomentar",
    avtentikacija,
    ctrlKomentarji.urediKomentar
);

//Izbrisi komentar za novico
router.delete(
    "/komentarji/:idKomentar/novice/:idNovica",
    avtentikacija,
    ctrlKomentarji.izbrisiKomentarNovica
);

//Izbrisi komentar za opozorilo
router.delete(
    "/komentarji/:idKomentar/opozorila/:idOpozorilo",
    avtentikacija,
    ctrlKomentarji.izbrisiKomentarOpozorilo
);

router.get("/prijavljeniObcani", ctrlPrijavljeniObcan.pridobiPrijavljeneObcane)
router.post("/prijavljeniObcani", ctrlPrijavljeniObcan.ustvariPrijavljenegaObcana)
router.put("/prijavljeniObcani/:idPrijavljenegaObcana", ctrlPrijavljeniObcan.urediPrijavljenegaObcana)
router.delete("/prijavljeniObcani/:idPrijavljenegaObcana", ctrlPrijavljeniObcan.izbrisiPrijavljenegaObcana)

router.get("/upravniki", ctrlUpravnik.pridobiUpravnike)
router.post("/upravniki", ctrlUpravnik.ustvariUpravnika)
router.put("/upravniki/:idUpravnika", ctrlUpravnik.urediUpravnika)
router.delete("/upravniki/:idUpravnika", ctrlUpravnik.izbrisiUpravnika)


router.get("/izvajalci", ctrlIzvajalec.pridobiIzvajalce)
router.get("/izvajalci/:idIzvajalca", ctrlIzvajalec.pridobiIzvajalca)
router.get("/izvajalci/:idIzvajalec/predlogi", ctrlIzvajalec.pridobiPredlogeIzvajalca)
router.post("/izvajalci", ctrlIzvajalec.ustvariIzvajalca)
router.put("/izvajalci/:idIzvajalca", ctrlIzvajalec.urediIzvajalca)
router.delete("/izvajalci/:idIzvajalca", ctrlIzvajalec.izbrisiIzvajalca)

router.get("/administratorji", ctrlAdministrator.pridobiAdministratorje)
router.post("/administratorji", ctrlAdministrator.ustvariAdministratorja)
router.put("/administratorji/:idAdministratorja", ctrlAdministrator.urediAdministratorja)
router.delete("/administratorji/:idAdministratorja", ctrlAdministrator.izbrisiAdministratorja)

router.post("/prijava", ctrlAvtentikacija.prijava);

module.exports = router;