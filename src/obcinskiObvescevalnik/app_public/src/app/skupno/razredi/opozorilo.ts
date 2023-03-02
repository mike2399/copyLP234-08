import {Komentar} from "./komentar";

export class Opozorilo {
  "_id": number;
  "naslov": string;
  "vsebina": string;
  "komentarji": Komentar[];
}
