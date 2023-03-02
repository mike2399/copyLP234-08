import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Opozorilo} from "../../razredi/opozorilo";
import {Novica} from "../../razredi/novica";

@Component({
  selector: 'app-objava-obvestila',
  templateUrl: './objava-obvestila.component.html',
  styleUrls: ['./objava-obvestila.component.css'],
})
export class ObjavaObvestilaComponent implements OnInit {
  constructor(private oo: ObcinskiobvescevalnikPodatkiService, private location: Location) {}
  public vrsta: string = "opozorilo";
  public naslov: string = "";
  public vsebina: string = "";
  public napaka: string = "";
  btnObjavi(): void {
    if(this.naslov.length > 0 && this.vsebina.length > 0){
      this.napaka = "";
      if(this.vrsta == "opozorilo"){
        let o: Opozorilo = {naslov:this.naslov, vsebina:this.vsebina,komentarji:[], _id:0}
        this.oo.ustvariOpozorilo(String(sessionStorage.getItem("obcina")),o).subscribe((op)=>{
          console.log(op)
          this.location.back()
        })
      }
      else if(this.vrsta == "novica"){
        let o: Novica = {naslov:this.naslov, vsebina:this.vsebina,komentarji:[], _id:0}
        this.oo.ustvariNovico(String(sessionStorage.getItem("obcina")),o).subscribe((op)=>{
          console.log(op)
          this.location.back()
        })
      }
    }
    else{
      this.napaka = "Prosimo izpolnite vsa polja";
    }
    console.log(this.vrsta)
    //this.location.back();
  }

  ngOnInit(): void {
  }
  nastaviVrsto(v: any): void {
    this.vrsta = v.target.value;
  }
  btnNazaj(): void {
    this.location.back();
  }
}
