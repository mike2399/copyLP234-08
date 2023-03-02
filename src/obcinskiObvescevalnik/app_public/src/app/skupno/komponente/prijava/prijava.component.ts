import { Component, OnInit } from '@angular/core';
import { ObcinskiobvescevalnikPodatkiService } from "../../storitve/obcinskiobvescevalnik-podatki.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private ooStoritev: ObcinskiobvescevalnikPodatkiService, private route:Router) { }

  public upIme: any;
  public geslo: any;
  public upImeBool: boolean = false;
  public opozorilo: any;

  private onStart(): void{
    this.upIme = document.getElementById("usernameInput");
    this.geslo = document.getElementById("passwordInput");
    this.opozorilo = document.getElementById("opozorilo");
    this.opozorilo.style.visibility = 'hidden';
  }

  async buttonPress(): Promise<void>{
    this.upImeBool = false;

    this.ooStoritev.prijavljeni().subscribe((obcani) => {
      if(obcani != null){
        for( let i = 0; i < obcani.length; i++){
          if(obcani[i].uporabniskoIme == this.upIme.value){
            this.upImeBool = true;
            break;
          }
        }
      }
    });

    this.ooStoritev.upravniki().subscribe((upravniki) => {
      if(upravniki != null){
        for( let i = 0; i < upravniki.length; i++){
          if(upravniki[i].uporabniskoIme == this.upIme.value){
            this.upImeBool = true;
            break;
          }
        }
      }
    });

    this.ooStoritev.izvajalci().subscribe((izvajalci) => {
      if(izvajalci != null){
        for( let i = 0; i < izvajalci.length; i++){
          if(izvajalci[i].uporabniskoIme == this.upIme.value){
            this.upImeBool = true;
            break;
          }
        }
      }
    });

    this.ooStoritev.admini().subscribe((admini) => {
      if(admini != null){
        for( let i = 0; i < admini.length; i++){
          if(admini[i].uporabniskoIme == this.upIme.value){
            this.upImeBool = true;
            break;
          }
        }
      }
    });

    await this.delay(2000);

    let tempjwt = true;

    if(!this.upImeBool){
      this.opozorilo.innerHTML = 'Uporabnik s tem imenom ne obstaja.';
      this.opozorilo.style.visibility = 'visible';
    } else {

      this.ooStoritev.prijaviUporabnika(this.upIme.value, this.geslo.value).subscribe((jwt) =>{
        tempjwt = false;
          let payload = JSON.parse(atob(JSON.stringify(jwt).split(".")[1]));
          //NASTAVITEV SEJE
          sessionStorage.setItem("_id", payload._id);
          sessionStorage.setItem("vloga", payload.vloga);
          sessionStorage.setItem("uporabniskoIme", payload.uporabniskoIme);
          sessionStorage.setItem("zeton", jwt.žeton);

          this.ooStoritev.prijavljeni().subscribe((obcan:any) => {
            let i = 0;
            for(let i = 0; i < obcan.length; i++){
              console.log(obcan[i].obcine[0]);
              if(obcan[i]._id == payload._id){
                sessionStorage.setItem("obcina", obcan[i].obcine[0])
                this.route.navigate(['./homepage/'+sessionStorage.getItem("obcina")+'/opozorila']);
                break;
              }
            }
          });
      });


      await this.delay(1500);

      if(tempjwt){
        this.opozorilo.innerHTML = 'Napačno geslo.';
        this.opozorilo.style.visibility = 'visible';
      }
    }
  }

  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit(): void {
    this.onStart()
  }

}
