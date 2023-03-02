import { Component, OnInit } from '@angular/core';
import { ObcinskiobvescevalnikPodatkiService } from '../../storitve/obcinskiobvescevalnik-podatki.service';
import { Obcina } from '../../razredi/obcina';
import { Obcan } from '../../razredi/obcan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css'],
})
export class RegistracijaComponent implements OnInit {
  constructor(
    private ooStoritev: ObcinskiobvescevalnikPodatkiService,
    private route: Router
  ) {}

  public obcine: Obcina[] = [];
  public uporabniki: any[] = [];
  public upImeBool: boolean = false;
  public button: any;
  public opozorilo: any;
  public ime: any;
  public priimek: any;
  public upIme: any;
  public email: any;
  public geslo1: any;
  public geslo2: any;
  public obcina: any;
  private uporabnik: any;

  async buttonPress(): Promise<void> {
    if (
      this.ime.value == '' ||
      this.priimek.value == '' ||
      this.upIme.value == '' ||
      this.email.value == '' ||
      this.geslo1.value == '' ||
      this.geslo2.value == '' ||
      this.obcina.value == ''
    ) {
      this.opozorilo.innerHTML = 'Izpolnite vsa polja.';
      this.opozorilo.style.visibility = 'visible';
      return;
    }

    if (this.geslo1.value != this.geslo2.value) {
      this.opozorilo.innerHTML = 'Ponovno vpišite obe gesli.';
      this.geslo1.value = null;
      this.geslo2.value = null;
      this.opozorilo.style.visibility = 'visible';
      return;
    }

    if (this.geslo1.value.length < 7) {
      this.opozorilo.innerHTML = 'Geslo mora biti daljše od 7 znakov';
      this.geslo1.value = null;
      this.geslo2.value = null;
      this.opozorilo.style.visibility = 'visible';
      return;
    }

    var emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailReg.test(this.email.value)) {
      this.opozorilo.innerHTML = 'Vpišite veljaven elektronski naslov.';
      this.email.value = null;
      this.opozorilo.style.visibility = 'visible';
      return;
    }

    this.upImeBool = false;

    this.ooStoritev.prijavljeni().subscribe((obcani) => {
      if (obcani != null) {
        this.uporabniki = obcani;
        for (let i = 0; i < this.uporabniki.length; i++) {
          if (this.uporabniki[i].uporabniskoIme == this.upIme.value) {
            this.upImeBool = true;
            this.upIme.value = null;
            this.opozorilo.innerHTML = 'Uporabniško je ime že v uporabi.';
            this.opozorilo.style.visibility = 'visible';
            break;
          }
        }
      }
    });

    this.ooStoritev.upravniki().subscribe((upravniki) => {
      if (upravniki != null) {
        this.uporabniki = upravniki;
        for (let i = 0; i < upravniki.length; i++) {
          if (upravniki[i].uporabniskoIme == this.upIme.value) {
            this.upImeBool = true;
            this.opozorilo.innerHTML = 'Uporabniško je ime že v uporabi.';
            this.opozorilo.style.visibility = 'visible';
          }
        }
      }
    });

    this.ooStoritev.izvajalci().subscribe((izvajalci) => {
      if (izvajalci != null) {
        this.uporabniki = izvajalci;
        for (let i = 0; i < izvajalci.length; i++) {
          if (izvajalci[i].uporabniskoIme == this.upIme.value) {
            this.upImeBool = true;
            this.upIme.value = null;
            this.opozorilo.innerHTML = 'Uporabniško je ime že v uporabi.';
            this.opozorilo.style.visibility = 'visible';
          }
        }
      }
    });

    this.ooStoritev.admini().subscribe((admini) => {
      if (admini != null) {
        this.uporabniki = admini;
        for (let i = 0; i < admini.length; i++) {
          if (admini[i].uporabniskoIme == this.upIme.value) {
            this.upImeBool = true;
            this.upIme.value = null;
            this.opozorilo.innerHTML = 'Uporabniško je ime že v uporabi.';
            this.opozorilo.style.visibility = 'visible';
          }
        }
      }
    });

    await this.delay(1000);

    if (!this.upImeBool) {
      this.opozorilo.style.visibility = 'hidden';

      for (let i = 0; i < this.obcine.length; i++) {
        if (this.obcine[i].imeObcine == this.obcina.value) {
          this.obcina = this.obcine[i];
          break;
        }
      }
      let obcan = new Obcan();

      obcan.ime = this.ime.value;

      this.ooStoritev
        .registrirajUporabnika(
          this.ime.value,
          this.priimek.value,
          this.upIme.value,
          this.geslo1.value,
          this.email.value,
          this.obcina._id
        )
        .subscribe((uporabnik) => this.uporabnik);

      this.route.navigate(['./prijava']);
    }
  }

  public delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onStart(): void {
    this.opozorilo = document.getElementById('opozorilo');

    this.ime = document.getElementById('nameInput');
    this.priimek = document.getElementById('surnameInput');
    this.upIme = document.getElementById('usernameInput');
    this.email = document.getElementById('emailInput');
    this.geslo1 = document.getElementById('passwordInput');
    this.geslo2 = document.getElementById('passwordReInput');
    this.obcina = document.getElementById('dropdown');
  }

  private pridobiObcine(): void {
    this.ooStoritev
      .vseObcine()
      .subscribe((najdeneObcine) => (this.obcine = najdeneObcine));
  }

  ngOnInit(): void {
    this.onStart(), this.pridobiObcine();
  }
}
