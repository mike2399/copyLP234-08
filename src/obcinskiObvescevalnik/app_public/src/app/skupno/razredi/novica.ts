import {Komentar} from "./komentar";

export class Novica {
  "_id": number;
  "naslov": string;
  "vsebina": string;
  "komentarji": Komentar[];
}
