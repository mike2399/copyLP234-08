import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import * as L from "leaflet";
import { ObcinskiobvescevalnikPodatkiService } from '../../storitve/obcinskiobvescevalnik-podatki.service';
import { Predlog } from '../../razredi/predlog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posredovanje-predloga',
  templateUrl: './posredovanje-predloga.component.html',
  styleUrls: ['./posredovanje-predloga.component.css']
})
export class PosredovanjePredlogaComponent implements OnInit {

  private mymap: any;
  private marker: any;
  public predlog: Predlog | undefined;
  public izvajalci: any;
  private idPredlog: string = "";
  private idObcina: string = "";
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
      this.marker = L.marker([this.lat, this.lng]).addTo(this.mymap);
    } 
  }

  constructor(private pot: ActivatedRoute, private ooStoritev : ObcinskiobvescevalnikPodatkiService, private route:Router) { }

  private pridobiPredlog(id: string): void {
    this.ooStoritev
    .pridobiPredlog(id)
    .subscribe((predlog) => {
      this.predlog = predlog;
      console.log(this.predlog);
      this.initMap();
    })
  }

  private pridobiIzvajalce(id: string): void {
    this.ooStoritev
    .pridobiIzvajalce(id)
    .subscribe((izvajalci) => {
      this.izvajalci = izvajalci;
      console.log(izvajalci);
    })
  }

  public vrni(): void {
    this.route.navigate([`/homepage/${this.idObcina}/nabiralnik`]);
  }

  public preveriVhod(): any {
    let izvajalec = document.getElementById("izberiIzvajalec") as HTMLSelectElement | null;
    if (izvajalec !== null) {
      //return izvajalec.options[izvajalec.selectedIndex].value;
      return izvajalec.options[izvajalec.selectedIndex];
    }
    return ""
  }

  public posreduj(): void {
    let izvajalec = this.preveriVhod();
    if (izvajalec.value === "") {
      alert("Prosim označite komu želite posredovati predlog!");
    }
    else {
      if (confirm(`Želite posredovati predlog podjetju ${izvajalec.text}`)) {
        this.ooStoritev
        .pridobiIzvajalca(izvajalec.value)
        .subscribe((najdenIzvajalec) => {
          
            najdenIzvajalec.naloge.push(this.idPredlog);
            this.ooStoritev
            .urediIzvajalca(izvajalec.value, najdenIzvajalec)
            .subscribe((najdenIzvajalec2) => {
              //console.log(najdenIzvajalec2);
              alert(`Naloga uspešno posredovana podjetju ${izvajalec.text}`);
              this.route.navigate([`/homepage/${this.idObcina}/nabiralnik`]);
            });
        });
      }
    }
  }

  ngOnInit(): void {
    this.pot.params.subscribe((params) => {
      this.idPredlog = params['idPredloga'].toString();
      this.pridobiPredlog(this.idPredlog);
      this.idObcina = params['idObcina'].toString();
      this.pridobiIzvajalce(this.idObcina);
    });
  }

}
