const mongoose = require("mongoose");
//Sklicevanje na drugo bazo - obcinskiObvescevalnik2
const obcinskiObvescevalnik2 = require("./obcinskiObvescevalnik2");
//Sklicevanje na prvo bazo - obcinskiObvescevalnik1
const obcinskiObvescevalnik1 = require("./obcinskiObvescevalnik1");

//Struktura povezave <<mongodb://uporabnisko_ime:geslo@streznik:vrata/podatkovna_baza>>
let dbURI1 = "mongodb://127.0.0.1:27017/obcinskiObvescevalnik1";
let dbURI2 = "mongodb://127.0.0.1:27018/obcinskiObvescevalnik2"

//Treba spremeniti ko bomo prenesli na heroku in uporabljali MongoDBAtlas
//Treba bo dodati novo okoljsko spremenljivko za drugo bazo
if (process.env.NODE_ENV === "production") {
    dbURI1 = process.env.MONGODB_CLOUD_URI1;
    dbURI2 = process.env.MONGODB_CLOUD_URI2;
}
else if (process.env.NODE_ENV === "docker") {
    dbURI1 = "mongodb://obcinski-obvescevalnik-mongodb1/obcinskiObvescevalnik1";
    dbURI2 = "mongodb://obcinski-obvescevalnik-mongodb2/obcinskiObvescevalnik2"
}

//Povezava za prvo bazo
const conn1 = mongoose.createConnection(dbURI1);
//Povezava za drugo bazo
const conn2 = mongoose.createConnection(dbURI2);

//Obvladovanje povezovanja - prva baza
conn1.on("connected", () => {
  console.log("Povezava vzpostavljena z " + dbURI1);
})
conn1.on("disconnected", () => {
  console.log("Povezava z " + dbURI1 + " prekinjena");
})

//Obvladovanje povezovanja - druga baza
conn2.on("connected", () => {
  console.log("Povezava vzpostavljena z " + dbURI2);
})
conn2.on("disconnected", () => {
  console.log("Povezava z " + dbURI2 + " prekinjena");
})

//Obvladovanje zapiranja
const pravilnaUstavitev = (sporocilo, povratniKlic) => {
    conn1.close(() => {
      console.log(`Mongoose1 je zaprl povezavo preko '${sporocilo}'.`);

      conn2.close(() => {
        console.log(`Mongoose2 je zaprl povezavo preko '${sporocilo}'.`);
        povratniKlic();
      });
    });
};
  
// Ponovni zagon nodemon
process.once("SIGUSR2", () => {
  pravilnaUstavitev("nodemon ponovni zagon", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
  
// Izhod iz aplikacije
process.on("SIGINT", () => {
  pravilnaUstavitev("izhod iz aplikacije", () => {
    process.exit(0);
  });
});
  
// Izhod iz aplikacije na Heroku
process.on("SIGTERM", () => {
  pravilnaUstavitev("izhod iz aplikacije na Heroku", () => {
    process.exit(0);
  });
});

//Ustvarjanje modelov za prvo bazo - pomankljivo, ustvarjeni samo tisti ki so v odvisnosti z drugo bazo
conn1.model("Izvajalec", obcinskiObvescevalnik1.izvajalecShema, "Izvajalci");

//Ustvarjanje modelov za drugo bazo
conn2.model("Obcina", obcinskiObvescevalnik2.Obcina, "Obcine");
conn2.model("Opozorilo", obcinskiObvescevalnik2.Opozorilo, "Opozorila");
conn2.model("Novica", obcinskiObvescevalnik2.Novica, "Novice");
conn2.model("Predlog", obcinskiObvescevalnik2.Predlog, "Predlogi");
conn2.model("Anketa", obcinskiObvescevalnik2.Anketa, "Ankete");
conn2.model("Naloga", obcinskiObvescevalnik2.Naloga, "Naloge");
conn2.model("Komentar", obcinskiObvescevalnik2.Komentar, "Komentarji");

conn1.model("PrijavljeniObcan", obcinskiObvescevalnik1.prijavljenObcanShema, "PrijavljeniObcani");
conn1.model("Upravnik", obcinskiObvescevalnik1.upravnikShema, "Upravniki");
conn1.model("Izvajalec", obcinskiObvescevalnik1.izvajalecShema, "Izvajalci");
conn1.model("Administrator", obcinskiObvescevalnik1.administratorShema, "Administratorji");
//Da lahko uporabimo povezavo v drugih datotekah
module.exports = {
  conn1, conn2
}
