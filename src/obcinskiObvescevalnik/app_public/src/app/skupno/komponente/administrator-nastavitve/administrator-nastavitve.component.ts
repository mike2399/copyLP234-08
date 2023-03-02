import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Administrator} from "../../razredi/administrator";
import {Obcina} from "../../razredi/obcina";
import {environment} from "../../../../environments/environment";
import { Location } from '@angular/common'
@Component({
  selector: 'app-administrator-nastavitve',
  templateUrl: './administrator-nastavitve.component.html',
  styleUrls: ['./administrator-nastavitve.component.css']
})
export class AdministratorNastavitveComponent implements OnInit {

  constructor(private location: Location, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  private apiUrl = environment.apiUrl;

  public admin: Administrator | any;
  public obcine: Obcina[] = [];
  public obcineAdmin: Obcina[] = [];

  private napolniPolja(): void {
    this.ooStoritev
      .admini()
      .subscribe(async (ad) => {
        let userID = sessionStorage.getItem("_id");
        if (userID != null){
          for (let i = 0; i < ad.length; i++){
            if (ad[i]._id.toString() === userID){
              this.admin = ad[i];
              for (let j = 0; j < ad[i].obcine.length; j++){
                const data = await fetch(this.apiUrl+"/obcine/"+ad[i].obcine[j]);
                const obcina = await data.json();
                this.obcineAdmin.push(obcina);
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
    let ime = (<HTMLInputElement>document.getElementById("imeAdmin")).value;
    let priimek = (<HTMLInputElement>document.getElementById("priimekAdmin")).value;
    let uporabnisko = (<HTMLInputElement>document.getElementById("uporabniskoAdmin")).value;
    let geslo = (<HTMLInputElement>document.getElementById("gesloAdmin")).value;
    let email = (<HTMLInputElement>document.getElementById("emailAdmin")).value;
    let rojstvo = (<HTMLInputElement>document.getElementById("rojstvoAdmin")).value;
    let dodaj = (<HTMLInputElement>document.getElementById("dodajObcinoAdmin")).value;
    let odstrani = (<HTMLInputElement>document.getElementById("odstraniObcinoAdmin")).value;

    if(ime) { // @ts-ignore
      this.admin.ime = ime;
    }
    if(priimek) { // @ts-ignore
      this.admin.priimek = priimek;
    }
    if(rojstvo) { // @ts-ignore
      this.admin.rojstvo = rojstvo;
    }

    if(email){ // @ts-ignore
      this.admin.email = email;
    }
    if(uporabnisko){ // @ts-ignore
      this.admin.uporabniskoIme = uporabnisko;
    }
    if(geslo){ // @ts-ignore
      this.admin.geslo = geslo;
    }
    if(dodaj){ // @ts-ignore
      this.admin.obcine.push(dodaj)
      // @ts-ignore
    }
    if(odstrani) { // @ts-ignore
      let od: Array = []
      // @ts-ignore
      for(let i = 0; i < this.admin.obcine.length; i++){
        // @ts-ignore
        if(this.admin.obcine[i] != odstrani && this.admin.obcine[i] != 'null' ) od.push(this.admin.obcine[i]);
      }
      // @ts-ignore
      this.admin.obcine = od;
    }
    // @ts-ignore
    console.log(this.admin)
    // @ts-ignore
    this.ooStoritev.urediAdministratorja(this.admin._id, this.admin).subscribe((i)=>{
      console.log(i);
      this.location.back()
    })
  }

  ngOnInit(): void {
    this.napolniPolja()
    this.najdiObcine()
  }

}
