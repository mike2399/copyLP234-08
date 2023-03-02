import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Novica} from "../../razredi/novica";

@Component({
  selector: 'app-seznam-novic',
  templateUrl: './seznam-novic.component.html',
  styleUrls: ['./seznam-novic.component.css']
})
export class SeznamNovicComponent implements OnInit {

  constructor(private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }
  public novice: Novica[] | any = [];
  ngOnInit(): void {
    this.ooStoritev.pridobiNovice(String(sessionStorage.getItem("obcina"))).subscribe((novice)=>{
      this.novice = novice;
    })

  }

}
