import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { IzbiraObcineComponent } from "../../skupno/komponente/izbira-obcine/izbira-obcine.component";
import { HomepageComponent } from "../../skupno/komponente/homepage/homepage.component";
import { ProfilComponent } from "../../skupno/komponente/profil/profil.component";
import { SeznamOpozorilComponent } from "../../skupno/komponente/seznam-opozoril/seznam-opozoril.component";
import { SeznamNovicComponent } from "../../skupno/komponente/seznam-novic/seznam-novic.component";
import { KoledarComponent } from "../../skupno/komponente/koledar/koledar.component";
import { NabiralnikComponent } from "../../skupno/komponente/nabiralnik/nabiralnik.component";
import { UrejanjeUporabnikovComponent } from "../../skupno/komponente/urejanje-uporabnikov/urejanje-uporabnikov.component";
import { PosredovanjePredlogaComponent } from 'src/app/skupno/komponente/posredovanje-predloga/posredovanje-predloga.component';
import {UrejanjePredlogaComponent} from "../../skupno/komponente/urejanje-predloga/urejanje-predloga.component";
import { PrijavaComponent } from 'src/app/skupno/komponente/prijava/prijava.component';
import { RegistracijaComponent } from 'src/app/skupno/komponente/registracija/registracija.component';
import {ObjavaObvestilaComponent} from "../../skupno/komponente/objava-obvestila/objava-obvestila.component";
import {PosiljanjePredlogaComponent} from "../../skupno/komponente/posiljanje-predloga/posiljanje-predloga.component";
import {OpravljenoComponent} from "../../skupno/komponente/opravljeno/opravljeno.component";

const poti: Routes = [
  {path: 'prijava', component: PrijavaComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: '', component: IzbiraObcineComponent},
  {path: 'homepage/:idObcine', component: HomepageComponent, children: [
      {path: 'opozorila', component: SeznamOpozorilComponent},
      {path: 'novice', component: SeznamNovicComponent},
      {path: 'koledar', component: KoledarComponent},
      {path: 'nabiralnik', component: NabiralnikComponent},
      {path: 'uporabniki', component: UrejanjeUporabnikovComponent},
    ]},
  {path: 'posiljanjePredloga/:idObcine', component: PosiljanjePredlogaComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'posredovanjePredloga/:idObcina/:idPredloga', component: PosredovanjePredlogaComponent },
  {path: 'zakljucevanjePredloga/:idObcina/:idPredloga', component: OpravljenoComponent },
  {path: 'urejanjePredloga/:idObcina/:idPredloga', component: UrejanjePredlogaComponent},
  {path: 'objavaObvestila', component: ObjavaObvestilaComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(poti)
  ],
  exports: [RouterModule],
})
export class AppUsmerjanjeModule { }
