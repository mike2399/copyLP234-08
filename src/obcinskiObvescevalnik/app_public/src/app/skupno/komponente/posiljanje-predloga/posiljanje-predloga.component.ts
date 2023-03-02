import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Predlog} from "../../razredi/predlog";
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import * as L from "leaflet"
import { icon, Marker } from 'leaflet';
import { Location } from '@angular/common';
import {Obcina} from "../../razredi/obcina";
import {Subscription} from "rxjs";

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-posiljanje-predloga',
  templateUrl: './posiljanje-predloga.component.html',
  styleUrls: ['./posiljanje-predloga.component.css']
})
export class PosiljanjePredlogaComponent implements OnInit, AfterViewInit {
  private map: any = null;
  private marker: any = null;
  public obcinaData: Obcina | undefined;
  public obcinaID: Subscription | undefined;

  goBack() {
    this.location.back();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.latObcine, this.lngObcine ],
      zoom: 10
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    // @ts-ignore
    this.map.on("click", e => {
      console.log(L.Icon.Default); // get the coordinates
      if(this.marker) this.map.removeLayer(this.marker)
      // @ts-ignore
      this.marker = new L.marker(e.latlng).addTo(this.map);
      this.predlog.lat = e.latlng.lat;
      this.predlog.lng = e.latlng.lng;
      console.log(this.predlog)
      this.map.addLayer(this.marker);
    });

  }
  public imeObcine: String = "";
  public datObcine: String = "";
  public obcina: String = "";
  public napaka: String = "";
  public latObcine: any = 0.0;
  public lngObcine: any = 0.0;
  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private oo: ObcinskiobvescevalnikPodatkiService, private pot: ActivatedRoute, private ooStoritev: ObcinskiobvescevalnikPodatkiService) { }
  public predlog: Predlog = {_id:0,avtor:"",naslov:"",vsebina:"",lat:0.0, lng:0.0};

  private pridobiObcino(id: String): void {
    this.ooStoritev
      .pridobiObcino(id)
      .subscribe((najdenaObcina) => (this.obcinaData = najdenaObcina));
  }

  public ustvariPredlog(): void {
    if(this.predlog.naslov.length == 0 || this.predlog.vsebina.length == 0){
      this.napaka = "Prosimo izpolnite vsa polja";
    }
    else if(!this.marker){
      this.napaka = "Prosimo izberite lokacijo na zemljevidu";
    }
    else{
      this.predlog.avtor = String(sessionStorage.getItem("_id"));
      this.oo.ustvariPredlog(this.predlog,this.obcina).subscribe(()=>{this.router.navigate([`/homepage/${this.obcina}`])});
    }
  }
  public preklici():void {
    this.location.back();
  }
  ngOnInit(): void {
    this.obcinaID = this.pot.params.subscribe(params => {
      this.pridobiObcino(params['idObcine'].toString());
    });
    // @ts-ignore
      this.obcina = String(sessionStorage.getItem('obcina'));
      this.oo.pridobiObcino(this.obcina).subscribe((o)=>{
        this.imeObcine=o.imeObcine;
        this.datObcine=o.datObcine;
        console.log(this.imeObcine)
        this.oo.pridobiLokacijoObcine(this.imeObcine).subscribe((lokacija)=>{
          if(lokacija.length > 0){
            this.map.setView([lokacija[0].lat, lokacija[0].lon],13);
          }
        });
      });
  }
  ngAfterViewInit(): void {
  this.initMap()
  }
}
