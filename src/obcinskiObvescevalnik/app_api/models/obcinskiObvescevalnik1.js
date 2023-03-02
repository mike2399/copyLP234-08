const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const upravnikShema = new mongoose.Schema({
  imeObcine: { type: String, required: true },
  uporabniskoIme: { type: String, required: true },
  zgoscenaVrednost: { type: String},
  nakljucnaVrednost: { type: String},
  email: { type: String, required: true },
  obcina: { type: String, required: true },
});

const prijavljenObcanShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, required: true },
  uporabniskoIme: { type: String, required: true },
  zgoscenaVrednost: { type: String},
  nakljucnaVrednost: { type: String},
  rojstvo: { type: Date, required: true },
  email: { type: String, required: true },
  obcine: {type: Array, required: true}, // Seznam občin iz druge baze --> nevem kako pravilno definirati
  predlogi: {type: Array, required: true}, // Seznam predlogov iz druge baze --> nevem kako pravilno definirati
  blokiran: { type: Boolean, required: true },
});

const administratorShema = new mongoose.Schema({
  ime: { type: String, required: true },
  priimek: { type: String, required: true },
  uporabniskoIme: { type: String, required: true },
  zgoscenaVrednost: { type: String},
  nakljucnaVrednost: { type: String},
  rojstvo: { type: Date, required: true },
  email: { type: String, required: true },
  obcine: {type: Array, required: true}, // Seznam občin iz druge baze --> nevem kako pravilno definirati
  predlogi: {type: Array, required: true}, // Seznam predlogov iz druge baze --> nevem kako pravilno definirati
});

const izvajalecShema = new mongoose.Schema({
  nazivPodjetja: { type: String, required: true },
  uporabniskoIme: { type: String, required: true },
  zgoscenaVrednost: { type: String},
  nakljucnaVrednost: { type: String},
  email: { type: String, required: true },
  obcineDelovanja:{type: Array, required: true}, // Seznam občin iz druge baze --> nevem kako pravilno definirati
  naloge: {type: Array, required: true}, // Seznam nalog iz druge baze --> nevem kako pravilno definirati
});


upravnikShema.methods.nastaviGeslo = function (geslo) {
  this.nakljucnaVrednost = crypto.randomBytes(16).toString("hex");
  this.zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
};

prijavljenObcanShema.methods.nastaviGeslo = function (geslo) {
  this.nakljucnaVrednost = crypto.randomBytes(16).toString("hex");
  this.zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
};

administratorShema.methods.nastaviGeslo = function (geslo) {
  this.nakljucnaVrednost = crypto.randomBytes(16).toString("hex");
  this.zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
};

izvajalecShema.methods.nastaviGeslo = function (geslo) {
  this.nakljucnaVrednost = crypto.randomBytes(16).toString("hex");
  this.zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
};

prijavljenObcanShema.methods.preveriGeslo = function (geslo) {
  let zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
  return this.zgoscenaVrednost == zgoscenaVrednost;
};

administratorShema.methods.preveriGeslo = function (geslo) {
  let zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
  return this.zgoscenaVrednost == zgoscenaVrednost;
};
izvajalecShema.methods.preveriGeslo = function (geslo) {
  let zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
  return this.zgoscenaVrednost == zgoscenaVrednost;
};
upravnikShema.methods.preveriGeslo = function (geslo) {
  let zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, "sha512")
      .toString("hex");
  return this.zgoscenaVrednost == zgoscenaVrednost;
};

prijavljenObcanShema.methods.generirajJwt = function () {
  const datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
  return jwt.sign(
      {
        _id: this._id,
        vloga: "prijavljenObcan",
        uporabniskoIme: this.uporabniskoIme,
        exp: parseInt(datumPoteka.getTime() / 1000),
      },
      "password123"
  );
};
administratorShema.methods.generirajJwt = function () {
  const datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
  return jwt.sign(
      {
        _id: this._id,
        vloga: "administrator",
        uporabniskoIme: this.uporabniskoIme,
        exp: parseInt(datumPoteka.getTime() / 1000),
      },
      "password123"
  );
};
izvajalecShema.methods.generirajJwt = function () {
  const datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
  return jwt.sign(
      {
        _id: this._id,
        vloga: "izvajalec",
        uporabniskoIme: this.uporabniskoIme,
        exp: parseInt(datumPoteka.getTime() / 1000),
      },
      "password123"
  );
};
upravnikShema.methods.generirajJwt = function () {
  const datumPoteka = new Date();
  datumPoteka.setDate(datumPoteka.getDate() + 7);
  return jwt.sign(
      {
        _id: this._id,
        vloga: "upravnik",
        uporabniskoIme: this.uporabniskoIme,
        exp: parseInt(datumPoteka.getTime() / 1000),
      },
      "password123"
  );
};

module.exports = {
   upravnikShema,
   prijavljenObcanShema,
   administratorShema,
   izvajalecShema
}
