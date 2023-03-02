import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Obcan} from "../../razredi/obcan";
import {Obcina} from "../../razredi/obcina";
import {environment} from "../../../../environments/environment";
import { Location } from '@angular/common';
@Component({
  selector: 'app-obcan-nastavitve',
  templateUrl: './obcan-nastavitve.component.html',
  styleUrls: ['./obcan-nastavitve.component.css']
})
export class ObcanNastavitveComponent implements OnInit {

  constructor(private location: Location, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  private apiUrl = environment.apiUrl;

  public obcan: Obcan | any;
  public obcine: Obcina[] = [];
  public obcineObcan: Obcina[] = [];

  private napolniPolja(): void {
    this.ooStoritev
      .prijavljeni()
      .subscribe(async (obcani) => {
        let userID = sessionStorage.getItem("_id");
        if (userID != null){
          for (let i = 0; i < obcani.length; i++){
            if (obcani[i]._id.toString() === userID){
              this.obcan = obcani[i];
              for (let j = 0; j < obcani[i].obcine.length; j++){
                const data = await fetch(this.apiUrl+"/obcine/"+obcani[i].obcine[j]);
                const obcina = await data.json();
                this.obcineObcan.push(obcina);
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
    let ime = (<HTMLInputElement>document.getElementById("imeObcana")).value;
    let priimek = (<HTMLInputElement>document.getElementById("priimekObcana")).value;
    let uporabnisko = (<HTMLInputElement>document.getElementById("uporabniskoObcana")).value;
    let geslo = (<HTMLInputElement>document.getElementById("gesloObcana")).value;
    let email = (<HTMLInputElement>document.getElementById("emailObcana")).value;
    let rojstvo = (<HTMLInputElement>document.getElementById("rojstvoObcana")).value;
    let dodaj = (<HTMLInputElement>document.getElementById("dodajObcino")).value;
    let odstrani = (<HTMLInputElement>document.getElementById("odstraniObcino")).value;

    if(ime) { // @ts-ignore
      this.obcan.ime = ime;
    }
    if(priimek) { // @ts-ignore
      this.obcan.priimek = priimek;
    }
    if(rojstvo) { // @ts-ignore
      this.obcan.rojstvo = rojstvo;
    }

    if(email){ // @ts-ignore
      this.obcan.email = email;
    }
    if(uporabnisko){ // @ts-ignore
      this.obcan.uporabniskoIme = uporabnisko;
    }
    if(geslo){ // @ts-ignore
      this.obcan.geslo = geslo;
    }
    if(dodaj){ // @ts-ignore
      this.obcan.obcine.push(dodaj)
      // @ts-ignore
    }
    if(odstrani) { // @ts-ignore
      let od: Array = []
      // @ts-ignore
      for(let i = 0; i < this.obcan.obcine.length; i++){
        // @ts-ignore
        if(this.obcan.obcine[i] != odstrani && this.obcan.obcine[i] != 'null' ) od.push(this.obcan.obcine[i]);
      }
      // @ts-ignore
      this.obcan.obcine = od;
    }
    // @ts-ignore
    console.log(this.obcan)
    // @ts-ignore
    this.ooStoritev.urediObcana(this.obcan._id, this.obcan).subscribe((i)=>{
      console.log(i);
      this.location.back()
    })
  }

  ngOnInit(): void {
    this.napolniPolja()
    this.najdiObcine()
  }

}
