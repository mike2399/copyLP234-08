import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from '@angular/router';
import { Predlog } from '../../razredi/predlog';
import { ObcinskiobvescevalnikPodatkiService } from '../../storitve/obcinskiobvescevalnik-podatki.service';
import * as L from "leaflet";
import {Location} from "@angular/common";

@Component({
  selector: 'app-urejanje-predloga',
  templateUrl: './urejanje-predloga.component.html',
  styleUrls: ['./urejanje-predloga.component.css'],
})

export class UrejanjePredlogaComponent implements OnInit {
  public predlog: any;
  private idObcina: string = "";
  private idPredlog: string = "";
  private idAvtor: string = "";
  private lat: number | undefined;
  private lng: number | undefined;
  private mymap: any;
  private marker: any;
  private vsebinaPredlog: string = "";
  private naslovPredlog: string = "";

  constructor(private pot: ActivatedRoute, private ooStoritev : ObcinskiobvescevalnikPodatkiService, private route:Router, private location: Location) {}

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
      this.marker = L.marker([this.lat, this.lng]).addTo(this.mymap);
    }
  }

  btnIzbrisi(): void {
    if (confirm("Ali ste prepričani da želite izbrisati predlog?")) {
      this.ooStoritev
      .izbrisiPredlog(this.idPredlog, this.idObcina, this.idAvtor)
      .subscribe(() => {
        console.log("Im in");
        this.route.navigate([`/homepage/${this.idObcina}`]);
      })
    }
  }

  btnPosodobi(): void {
    if (this.preveriPodatke()) {
      if (confirm("Ali želite urediti že obstoječ predlog?")) {
        this.ooStoritev
        .pridobiPredlog(this.predlog._id)
        .subscribe((predlog) => {
            predlog.naslov = this.naslovPredlog;
            predlog.vsebina = this.vsebinaPredlog;
            this.ooStoritev
            .urediPredlog(this.idPredlog, predlog)
            .subscribe((noviPredlog) => {
              console.log(noviPredlog);
            })
        })
      }
    }
    else {
      alert("Izpolnite vsa polja!");
    }
  }

  btnNazaj(): void {
    this.location.back();
  }

  private pridobiPredlog(id: string): void {
    this.ooStoritev
    .pridobiPredlog(id)
    .subscribe((predlog) => {
      this.predlog = predlog;
      this.idAvtor = predlog.avtor;
      this.initMap();
    })
  }

  public preveriPodatke(): boolean {
    let predlogNaslov = document.getElementById("naslov") as HTMLInputElement;
    let predlogVsebina = document.getElementById("vsebina") as HTMLInputElement;

    if (predlogNaslov !== null && predlogVsebina !== null) {
      if (predlogNaslov.value === "" || predlogVsebina.value === "") {
        return false
      }
      this.naslovPredlog = predlogNaslov.value;
      this.vsebinaPredlog = predlogVsebina.value;
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.pot.params.subscribe((params) => {
      this.idPredlog = params['idPredloga'].toString();
      this.idObcina = params['idObcina'].toString();
      this.pridobiPredlog(this.idPredlog);
    });
  }
}
