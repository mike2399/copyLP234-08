import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Izvajalec} from "../../razredi/izvajalec";
import {Obcina} from "../../razredi/obcina";
import {environment} from "../../../../environments/environment";
import { Location } from '@angular/common';

@Component({
  selector: 'app-izvajalec-nastavitve',
  templateUrl: './izvajalec-nastavitve.component.html',
  styleUrls: ['./izvajalec-nastavitve.component.css']
})
export class IzvajalecNastavitveComponent implements OnInit {

  constructor(private location: Location, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  private apiUrl = environment.apiUrl;

  public izvajalec: Izvajalec | any;
  public obcine: Obcina[] = [];
  public obcineDelovanja: Obcina[] = [];

  private napolniPolja(): void {
    this.ooStoritev
      .izvajalci()
      .subscribe(async (izvajalci) => {
        let userID = sessionStorage.getItem("_id");
        if (userID != null){
          for (let i = 0; i < izvajalci.length; i++){
            if (izvajalci[i]._id.toString() === userID){
              this.izvajalec = izvajalci[i];
              for (let j = 0; j < izvajalci[i].obcineDelovanja.length; j++){
                const data = await fetch(this.apiUrl+"/obcine/"+izvajalci[i].obcineDelovanja[j]);
                const obcina = await data.json();
                this.obcineDelovanja.push(obcina);
              }
            }
          }
        }
      });
  }

  private najdiObcine(): void {
    this.ooStoritev
      .vseObcine()
      .subscribe((ob) => (this.obcine = ob));
  }

  public posodobi(): void {
    let naziv = (<HTMLInputElement>document.getElementById("nazivPodjetja")).value;
    let email = (<HTMLInputElement>document.getElementById("emailPodjetja")).value;
    let uporabnisko = (<HTMLInputElement>document.getElementById("uporabniskoPodjetja")).value;
    let geslo = (<HTMLInputElement>document.getElementById("gesloPodjetja")).value;
    let dodaj = (<HTMLInputElement>document.getElementById("dodajObcinoPod")).value;
    let odstrani = (<HTMLInputElement>document.getElementById("odstraniObcinoPod")).value;
    if(naziv) { // @ts-ignore
      this.izvajalec.nazivPodjetja = naziv;
    }
    if(email){ // @ts-ignore
      this.izvajalec.email = email;
    }
    if(uporabnisko){ // @ts-ignore
      this.izvajalec.uporabniskoIme = uporabnisko;
    }
    if(geslo){ // @ts-ignore
      this.izvajalec.geslo = geslo;
    }
    if(dodaj){ // @ts-ignore
      this.izvajalec.obcineDelovanja.push(dodaj)
      // @ts-ignore
    }
    if(odstrani) { // @ts-ignore
      let od: Array = []
      for(let i = 0; i < this.izvajalec.obcineDelovanja.length; i++){
        if(this.izvajalec.obcineDelovanja[i] != odstrani && this.izvajalec.obcineDelovanja[i] != 'null' ) od.push(this.izvajalec.obcineDelovanja[i]);
      }
      this.izvajalec.obcineDelovanja = od;
    }
    // @ts-ignore
    this.ooStoritev.urediIzvajalca(this.izvajalec._id, this.izvajalec).subscribe((i)=>{
    console.log(i);
    this.location.back()
  })
  }

  ngOnInit(): void {
    this.napolniPolja()
    this.najdiObcine()
  }

}
