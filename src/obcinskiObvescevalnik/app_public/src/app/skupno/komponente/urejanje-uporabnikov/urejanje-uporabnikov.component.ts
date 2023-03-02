import { Component, OnInit } from '@angular/core';
import {Obcan} from "../../razredi/obcan";
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";

@Component({
  selector: 'app-urejanje-uporabnikov',
  templateUrl: './urejanje-uporabnikov.component.html',
  styleUrls: ['./urejanje-uporabnikov.component.css']
})
export class UrejanjeUporabnikovComponent implements OnInit {

  constructor(private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  public uporabniki: Obcan[] = []

  private obcan: Obcan | any;

  private pridobiObcane(): void {
    this.ooStoritev
      .prijavljeni()
      .subscribe((obc) => (this.uporabniki = obc));
  }

  public blokiraj(index: number): void {
    //console.log(this.uporabniki[index]);
    let potrdi = confirm("Ali ste prepričani, da želite blokirati uporabnika?")
    if (potrdi){

    }
  }

  ngOnInit(): void {
    this.pridobiObcane()
  }

}
