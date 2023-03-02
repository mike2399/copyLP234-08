import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppUsmerjanjeModule } from "./moduli/app-usmerjanje/app-usmerjanje.module";
import { PrijavaComponent } from "./skupno/komponente/prijava/prijava.component"
import { IzbiraObcineComponent } from './skupno/komponente/izbira-obcine/izbira-obcine.component';
import { OgrodjeComponent } from './skupno/komponente/ogrodje/ogrodje.component';
import { HomepageComponent } from './skupno/komponente/homepage/homepage.component';
import { ProfilComponent } from './skupno/komponente/profil/profil.component';
import { SeznamOpozorilComponent } from './skupno/komponente/seznam-opozoril/seznam-opozoril.component';
import { SeznamNovicComponent } from './skupno/komponente/seznam-novic/seznam-novic.component';
import { KoledarComponent } from './skupno/komponente/koledar/koledar.component';
import { NabiralnikComponent } from './skupno/komponente/nabiralnik/nabiralnik.component';
import { UrejanjeUporabnikovComponent } from './skupno/komponente/urejanje-uporabnikov/urejanje-uporabnikov.component';
import { UrejanjePredlogaComponent } from './skupno/komponente/urejanje-predloga/urejanje-predloga.component';
import { ObjavaObvestilaComponent } from './skupno/komponente/objava-obvestila/objava-obvestila.component';
import { PosredovanjePredlogaComponent } from './skupno/komponente/posredovanje-predloga/posredovanje-predloga.component';
import { UpravnikOrodnaVrsticaComponent } from './skupno/komponente/upravnik-orodna-vrstica/upravnik-orodna-vrstica.component';
import { ZadnjiPredlogiComponent } from './skupno/komponente/zadnji-predlogi/zadnji-predlogi.component';
import { UpravnikNastavitveComponent } from './skupno/komponente/upravnik-nastavitve/upravnik-nastavitve.component';
import { ObcanNastavitveComponent } from './skupno/komponente/obcan-nastavitve/obcan-nastavitve.component';
import { AdministratorNastavitveComponent } from './skupno/komponente/administrator-nastavitve/administrator-nastavitve.component';
import { IzvajalecNastavitveComponent } from './skupno/komponente/izvajalec-nastavitve/izvajalec-nastavitve.component';
import { RegistracijaComponent } from './skupno/komponente/registracija/registracija.component';
import { PosiljanjePredlogaComponent } from './skupno/komponente/posiljanje-predloga/posiljanje-predloga.component';
import {FormsModule} from "@angular/forms";
import { OpravljenoComponent } from './skupno/komponente/opravljeno/opravljeno.component';
import { DatumPipe } from './skupno/cevi/datum.pipe';

@NgModule({
  declarations: [
    PrijavaComponent,
    IzbiraObcineComponent,
    OgrodjeComponent,
    HomepageComponent,
    ProfilComponent,
    SeznamOpozorilComponent,
    SeznamNovicComponent,
    KoledarComponent,
    NabiralnikComponent,
    UrejanjeUporabnikovComponent,
    UrejanjePredlogaComponent,
    ObjavaObvestilaComponent,
    PosredovanjePredlogaComponent,
    UpravnikOrodnaVrsticaComponent,
    ZadnjiPredlogiComponent,
    UpravnikNastavitveComponent,
    ObcanNastavitveComponent,
    AdministratorNastavitveComponent,
    IzvajalecNastavitveComponent,
    RegistracijaComponent,
    PosiljanjePredlogaComponent,
    OpravljenoComponent,
    DatumPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppUsmerjanjeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
