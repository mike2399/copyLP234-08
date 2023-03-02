import {Obcina} from "./obcina";
import {Naloga} from "./naloga";

export class Izvajalec {
  "_id": number;
  "nazivPodjetja": string;
  "uporabniskoIme": string;
  "zgoscenaVrednost": string;
  "nakljucnaVrednost": string;
  "email": string;
  "obcineDelovanja": string[];
  "naloge": Naloga[];
}
