import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Upravnik} from "../../razredi/upravnik";
import { Location } from "@angular/common";
@Component({
  selector: 'app-upravnik-nastavitve',
  templateUrl: './upravnik-nastavitve.component.html',
  styleUrls: ['./upravnik-nastavitve.component.css']
})
export class UpravnikNastavitveComponent implements OnInit {

  constructor(private location: Location, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  public upravnik: Upravnik | undefined;

  private napolniPolja(): void {
    this.ooStoritev
      .upravniki()
      .subscribe((up) => {
        let userID = sessionStorage.getItem("_id");
        if (userID != null){
          for (let i = 0; i < up.length; i++){
            if (up[i]._id.toString() === userID){
              this.upravnik = up[i];
            }
          }
        }
      });
  }

  public posodobi(): void {
    let ime = (<HTMLInputElement>document.getElementById("imeObcine")).value;
    let email = (<HTMLInputElement>document.getElementById("emailObcine")).value;
    let uporabnisko = (<HTMLInputElement>document.getElementById("uporabniskoObcine")).value;
    let geslo = (<HTMLInputElement>document.getElementById("gesloObcine")).value;
    if(ime){ // @ts-ignore
      this.upravnik.imeObcine = ime
    }
    if(email){ // @ts-ignore
      this.upravnik.email = ime
    }
    if(uporabnisko){ // @ts-ignore
      this.upravnik.uporabniskoIme = uporabnisko
    }
    if(geslo){ // @ts-ignore
      this.upravnik.geslo = geslo
    } // @ts-ignore
    this.ooStoritev.urediUpravnika(this.upravnik._id, this.upravnik).subscribe((i)=>{
      console.log(i);
      this.location.back()
    })

  }

  ngOnInit(): void {
    this.napolniPolja()
  }

}
