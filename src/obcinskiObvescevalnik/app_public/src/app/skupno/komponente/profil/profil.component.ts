import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import { Router } from '@angular/router';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private location: Location, private route: Router, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  public obcan: Boolean = false;
  public upravnik: Boolean = false;
  public admin: Boolean = false;
  public izvajalec: Boolean = false;

  public ime: String = "";

  goBack() {
    this.location.back();
  }

  public odjava(): void {
    sessionStorage.clear();
    this.route.navigate(['']);

  }

  private prikaziOkna(): void {
    let userID = sessionStorage.getItem("_id");
    let userVloga = sessionStorage.getItem("vloga");
    if (userVloga != null){
      if (userVloga === "prijavljenObcan") {
        this.obcan = true;
        this.ooStoritev
          .prijavljeni()
          .subscribe((obcani) => {
            for (let i = 0; i < obcani.length; i++){
              if (obcani[i]._id.toString() === userID){
                this.ime = obcani[i].ime + " " + obcani[i].priimek;
              }
            }
          });
      } else if (userVloga === "upravnik") {
        this.upravnik = true;
        this.ooStoritev
          .upravniki()
          .subscribe((upravnki) => {
            for (let i = 0; i < upravnki.length; i++){
              if (upravnki[i]._id.toString() === userID){
                this.ime = upravnki[i].imeObcine;
              }
            }
          });
      } else if (userVloga === "administrator") {
        this.admin = true;
        this.ooStoritev
          .admini()
          .subscribe((admini) => {
            for (let i = 0; i < admini.length; i++){
              if (admini[i]._id.toString() === userID){
                this.ime = admini[i].ime + " " + admini[i].priimek;
              }
            }
          });
      } else if (userVloga === "izvajalec") {
        this.izvajalec = true;
        this.ooStoritev
          .izvajalci()
          .subscribe((izvajalci) => {
            for (let i = 0; i < izvajalci.length; i++){
              if (izvajalci[i]._id.toString() === userID){
                this.ime = izvajalci[i].nazivPodjetja;
              }
            }
          });
      }
    }
  }

  public izbrisiRacun(): void {
    let userID = sessionStorage.getItem("_id");
    let potrdi = confirm("Ali ste prepričani, da želite izbrisati račun?");
    if (userID != null && potrdi){
      if (this.obcan){
        this.ooStoritev
          .izbrisiObcana(userID)
          .subscribe((odgovor) => {
            sessionStorage.clear();
            this.route.navigate(['']);
          });
      } else if (this.upravnik){
        this.ooStoritev
          .izbrisiUpravnika(userID)
          .subscribe((odgovor) => {
            sessionStorage.clear();
            this.route.navigate(['']);
          });
      } else if (this.admin){
        this.ooStoritev
          .izbrisiAdmina(userID)
          .subscribe((odgovor) => {
            sessionStorage.clear();
            this.route.navigate(['']);
          });
      } else if (this.izvajalec){
        this.ooStoritev
          .izbrisiIzvajalca(userID)
          .subscribe((odgovor) => {
            sessionStorage.clear();
            this.route.navigate(['']);
          });
      }
    }
  }

  ngOnInit(): void {
    this.prikaziOkna()
  }

}
