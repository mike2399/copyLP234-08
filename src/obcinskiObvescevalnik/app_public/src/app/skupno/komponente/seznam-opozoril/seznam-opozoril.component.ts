import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Opozorilo} from "../../razredi/opozorilo";

@Component({
  selector: 'app-seznam-opozoril',
  templateUrl: './seznam-opozoril.component.html',
  styleUrls: ['./seznam-opozoril.component.css']
})
export class SeznamOpozorilComponent implements OnInit {

  constructor(private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }
  public opozorila: Opozorilo[] | any = [];
  ngOnInit(): void {
    this.ooStoritev.pridobiOpozorila(String(sessionStorage.getItem("obcina"))).subscribe((opozorila)=>{
      this.opozorila = opozorila;
    })

  }

}
