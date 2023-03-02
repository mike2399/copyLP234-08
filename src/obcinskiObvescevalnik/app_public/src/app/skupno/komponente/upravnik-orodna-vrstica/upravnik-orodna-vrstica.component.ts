import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Obcina } from '../../razredi/obcina';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";

@Component({
  selector: 'app-upravnik-orodna-vrstica',
  templateUrl: './upravnik-orodna-vrstica.component.html',
  styleUrls: ['./upravnik-orodna-vrstica.component.css']
})
export class UpravnikOrodnaVrsticaComponent implements OnInit {

  public obcina: Obcina | undefined;

  constructor(private pot: ActivatedRoute, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }

  private pridobiObcino(id: String): void {
    this.ooStoritev
      .pridobiObcino(id)
      .subscribe((najdenaObcina) => (this.obcina = najdenaObcina));
  }

  ngOnInit(): void {
    this.pot.params.subscribe((params) => {
      this.pridobiObcino(params['idObcina'].toString());
    });
  }

}
