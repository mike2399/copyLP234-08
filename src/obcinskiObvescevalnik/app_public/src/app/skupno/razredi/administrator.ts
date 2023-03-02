import {Obcina} from "./obcina";
import {Predlog} from "./predlog";

export class Administrator {
  "_id": number;
  "ime": string;
  "priimek": string;
  "uporabniskoIme": string;
  "zgoscenaVrednost": string;
  "nakljucnaVrednost": string;
  "rojstvo": string;
  "email": string;
  "obcine": Obcina[];
  "predlogi": Predlog[];
}
