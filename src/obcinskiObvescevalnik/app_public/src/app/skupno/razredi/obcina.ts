import {Opozorilo} from "./opozorilo";
import {Novica} from "./novica";
import {Anketa} from "./anketa";
import {Predlog} from "./predlog";
import {Izvajalec} from "./izvajalec";

export class Obcina {
  "_id": number;
  "imeObcine": string;
  "datObcine": string;
  "pobrateneObcine": Obcina[];
  "opozorila": Opozorilo[];
  "novice": Novica[];
  "ankete": Anketa[];
  "predlogi": number[];
  "izvajalci": Izvajalec[];
}
