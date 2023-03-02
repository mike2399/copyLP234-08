import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {Obcina} from "../../razredi/obcina";
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Opozorilo} from "../../razredi/opozorilo";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public obcina: Obcina | undefined;
  private obcinaID: Subscription | undefined;
  public opozorila: Opozorilo[] | any;
  public prijavljen: Boolean = false;
  public obcan: Boolean = false;
  public upravnik: Boolean = false;
  public admin: Boolean = false;
  public izvajalec: Boolean = false;

  constructor(private pot: ActivatedRoute, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  private pridobiObcino(id: String): void {
    this.ooStoritev
      .pridobiObcino(id)
      .subscribe((najdenaObcina) => (this.obcina = najdenaObcina));
  }

  private nastaviStran(): void {
    let userID = sessionStorage.getItem("_id");
    let userVloga = sessionStorage.getItem("vloga");
    if (userID != null){
      this.prijavljen = true;
      if (userVloga === "prijavljenObcan") {
        this.obcan = true;
      } else if (userVloga === "upravnik") {
        this.upravnik = true;
      } else if (userVloga === "administrator") {
        this.admin = true;
      } else if (userVloga === "izvajalec") {
        this.izvajalec = true;
      }
    }
  }

  ngOnInit(): void {
    this.obcinaID = this.pot.params.subscribe(params => {
      sessionStorage.setItem("obcina", params['idObcine'].toString());
      this.pridobiObcino(params['idObcine'].toString());
    });
    this.nastaviStran()
  }

}
