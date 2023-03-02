import { Component, OnInit } from '@angular/core';
import { ObcinskiobvescevalnikPodatkiService } from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Obcina} from "../../razredi/obcina";

@Component({
  selector: 'app-izbira-obcine',
  templateUrl: './izbira-obcine.component.html',
  styleUrls: ['./izbira-obcine.component.css']
})
export class IzbiraObcineComponent implements OnInit {

  constructor(private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  public obcine: Obcina[] = [];

  private pridobiObcine(): void {
    this.ooStoritev
      .vseObcine()
      .subscribe((najdeneObcine) => (this.obcine = najdeneObcine));
  }

  ngOnInit(): void {
    this.pridobiObcine()
  }

}
