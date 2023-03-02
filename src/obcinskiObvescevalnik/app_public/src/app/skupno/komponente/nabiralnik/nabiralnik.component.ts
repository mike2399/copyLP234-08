import { Component, OnInit } from '@angular/core';
import {ObcinskiobvescevalnikPodatkiService} from "../../storitve/obcinskiobvescevalnik-podatki.service";
import {Predlog} from "../../razredi/predlog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nabiralnik',
  templateUrl: './nabiralnik.component.html',
  styleUrls: ['./nabiralnik.component.css']
})
export class NabiralnikComponent implements OnInit {

  constructor(private router: Router, private oo: ObcinskiobvescevalnikPodatkiService) { }
  public predlogi: Predlog[] | any = [];
  public naloge: Predlog[] | any = [];
  ngOnInit(): void {
    if(String(sessionStorage.getItem("vloga"))=="upravnik")
    this.oo.pridobiPredloge(String(sessionStorage.getItem("obcina"))).subscribe((predlogi)=>{
      this.predlogi = predlogi;
    })
    else
      this.oo.pridobiNalogeIzvajalca(String(sessionStorage.getItem("_id"))).subscribe((predlogi)=>{
        this.naloge = predlogi;
      })
  }
  posreduj(id:String): void{
    this.router.navigate(['/posredovanjePredloga',String(sessionStorage.getItem("obcina")), id]);
  }
  oznaciOpravljeno(predlog: Predlog): void{
      this.naloge.splice(this.naloge.indexOf(predlog));
      this.router.navigate(['/zakljucevanjePredloga', String(sessionStorage.getItem("obcina")), predlog._id])
  }

}
