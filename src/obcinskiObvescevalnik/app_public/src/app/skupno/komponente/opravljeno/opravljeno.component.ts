import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import * as L from "leaflet";
import { ObcinskiobvescevalnikPodatkiService } from '../../storitve/obcinskiobvescevalnik-podatki.service';
import { Predlog } from '../../razredi/predlog';
import { Router } from '@angular/router';
import { Obcina } from '../../razredi/obcina';

@Component({
  selector: 'app-opravljeno',
  templateUrl: './opravljeno.component.html',
  styleUrls: ['./opravljeno.component.css']
})
export class OpravljenoComponent implements OnInit {

  private id: string | null;
  private mymap: any;
  public predlog: Predlog | undefined;
  public izvajalci: any;
  private idPredlog: string = "";
  private idObcina: string = "";
  public obcina: Obcina | undefined;
  private lat: number | undefined;
  private lng: number | undefined;

  private initMap(): void {
    this.lat = this.predlog?.lat;
    this.lng = this.predlog?.lng;
    if (this.lat && this.lng) {
      this.mymap = L.map("zemljevid").setView([this.lat, this.lng], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGltb3RlamJhdmVjIiwiYSI6ImNrdXR3c3dtaDBvYWMzMXA3anExbXRpYWoifQ.-myD3scqZmxnf_9v2Q3lAA'
      }).addTo(this.mymap);
      L.marker([this.lat, this.lng]).addTo(this.mymap);
    }
  }

  constructor(private pot: ActivatedRoute, private ooStoritev : ObcinskiobvescevalnikPodatkiService, private route:Router) {
    this.id = window.sessionStorage.getItem("_id");
   }

  private pridobiPredlog(id: string): void {
    this.ooStoritev
    .pridobiPredlog(id)
    .subscribe((predlog) => {
      this.predlog = predlog;
      this.initMap();
    })
  }

  private pridobiObcina(){
    this.ooStoritev
    .pridobiObcino(this.idObcina)
    .subscribe((obcina) => {
      this.obcina = obcina;
    });
  }

  public vrni(): void {
    this.route.navigate([`/homepage/${String(sessionStorage.getItem("obcina"))}/`]);
  }

  public opravljeno(): void {
    if (confirm(`Želite zaključiti predlog?`)) {
      this.ooStoritev.zakljuciPredlog(this.idPredlog).subscribe((predlog) => {
        this.vrni();
      });
    }
  }

  ngOnInit(): void {
    this.pot.params.subscribe((params) => {
      this.idPredlog = params['idPredloga'].toString();
      this.pridobiPredlog(this.idPredlog);
      this.idObcina = params['idObcina'].toString();
      this.pridobiObcina();
    });
  }

}
