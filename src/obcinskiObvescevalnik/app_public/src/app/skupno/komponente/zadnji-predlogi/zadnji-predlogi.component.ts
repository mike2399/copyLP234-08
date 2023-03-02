import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Predlog} from "../../razredi/predlog";
import {environment} from "../../../../environments/environment";
import {Obcina} from "../../razredi/obcina";
import {Router} from "@angular/router";

@Component({
  selector: 'app-zadnji-predlogi',
  templateUrl: './zadnji-predlogi.component.html',
  styleUrls: ['./zadnji-predlogi.component.css']
})
export class ZadnjiPredlogiComponent implements OnInit {

  constructor(private ooStoritev: ObcinskiobvescevalnikPodatkiService, private route: Router) { }

  private apiUrl = environment.apiUrl;

  public predlogi: Predlog[] = [];
  public obcine: Obcina[] = [];

  private napolniPodatke(){
    this.ooStoritev
      .prijavljeni()
      .subscribe(async (obcan) => {
        let userID = sessionStorage.getItem("_id");
        if (userID != null){
          for (let i = 0; i < obcan.length; i++){
            if (obcan[i]._id.toString() === userID){
              for (let j = 0; j < obcan[i].predlogi.length; j++){
                const data = await fetch(this.apiUrl+"/predlogi/"+obcan[i].predlogi[j]);
                const predl = await data.json();
                if (this.predlogi.length == 5){
                  this.predlogi.splice(0, 1);
                }
                this.predlogi.push(predl);
              }
            }
          }
        }
      });
  }

  private pridobiObcine(): void {
    this.ooStoritev
      .vseObcine()
      .subscribe((obc) => (this.obcine = obc));
  }

  public posreduj(index: number): void {
    for (let i = 0; i < this.obcine.length; i++){
      for (let j = 0; j < this.obcine[i].predlogi.length; j++){
        if (this.obcine[i].predlogi[j] == this.predlogi[index]._id){
          let userID = sessionStorage.getItem("_id");
          this.route.navigate([`/urejanjePredloga/${this.obcine[i]._id}/${this.predlogi[index]._id}`]);
        }
      }
    }
  }

  ngOnInit(): void {
    this.napolniPodatke()
    this.pridobiObcine()
  }

}
