import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs";

import { environment } from "../../../environments/environment"
import {Obcina} from "../razredi/obcina";
import {Obcan} from "../razredi/obcan";
import {Upravnik} from "../razredi/upravnik";
import {Izvajalec} from '../razredi/izvajalec';
import { Administrator } from '../razredi/administrator';
import { Predlog } from "../razredi/predlog";
import { Naloga } from '../razredi/naloga';
import {Novica} from "../razredi/novica";
import {Opozorilo} from "../razredi/opozorilo";

@Injectable({
  providedIn: 'root'
})
export class ObcinskiobvescevalnikPodatkiService {

  constructor(private http: HttpClient) { }

  private appUrl = environment.apiUrl

  public vseObcine(): Observable<Obcina[]> {
    const url: string = `${this.appUrl}/obcine`;
    return this.http
      .get<Obcina[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public prijaviUporabnika(upImeR: String, gesloR: String): Observable<any> {
    const url: string = `${this.appUrl}/prijava`;
    return this.http
      .post<any>(url, {
        uporabniskoIme: upImeR.toString(),
        geslo: gesloR.toString()
      });
  }

  public registrirajUporabnika(imeR: String, priimekR: String, upImeR: String, gesloR: String, emailR: String, obcinaR: string): Observable<any>{
    const url: string = `${this.appUrl}/prijavljeniObcani`;
    return this.http
      .post<any>(url, {
          email:emailR,
          ime:imeR,
          priimek:priimekR,
          obcine:[obcinaR],
          uporabniskoIme: upImeR,
          rojstvo: '1420-06-09',
          geslo: gesloR
      })
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public prijavljeni(): Observable<Obcan[]> {
    const url: string = `${this.appUrl}/prijavljeniObcani`;
    return this.http
      .get<Obcan[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public admini(): Observable<Administrator[]> {
    const url: string = `${this.appUrl}/administratorji`;
    return this.http
      .get<Administrator[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public upravniki(): Observable<Upravnik[]> {
    const url: string = `${this.appUrl}/upravniki`;
    return this.http
      .get<Upravnik[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izvajalci(): Observable<Izvajalec[]> {
    const url: string = `${this.appUrl}/izvajalci`;
    return this.http
      .get<Izvajalec[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public pridobiObcino(id: String): Observable<Obcina> {
    const url: string = `${this.appUrl}/obcine/${id}`;
    return this.http
      .get<Obcina>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public pridobiLokacijoObcine(obcina: String): Observable<any> {
    const url: string = `   https://nominatim.openstreetmap.org/search?q=${obcina}&format=json`;
    return this.http
      .get<Obcina>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public zakljuciPredlog(id: String): Observable<Predlog> {
    const url: string = `${this.appUrl}/predlogi/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http
      .put<Predlog>(url,{
        opravljeno:true
      },httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public pridobiPredlog(id: String): Observable<Predlog> {
    const url: string = `${this.appUrl}/predlogi/${id}`;
    return this.http
    .get<Predlog>(url)
    .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public ustvariPredlog(predlog: Predlog, idObcine: String): Observable<Predlog> {
    const url: string = `${this.appUrl}/predlogi/${idObcine}/${predlog.avtor}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http.post<Predlog>(url, predlog, httpLastnosti).pipe(retry(1), catchError(this.obdelajNapako));
  }

  public pridobiIzvajalce(id: String): Observable<Izvajalec> {
    const url: string = `${this.appUrl}/obcine/${id}/izvajalci`;
    return this.http
      .get<Izvajalec>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public pridobiIzvajalca(id: String): Observable<any> {
    const url: string = `${this.appUrl}/izvajalci/${id}`;
    return this.http
      .get<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public pridobiOpozorila(idObcine: String): Observable<any> {
    const url: string = `${this.appUrl}/obcine/${idObcine}/opozorila`;
    return this.http
      .get<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }
  public pridobiPredloge(idObcine: String): Observable<any> {
    const url: string = `${this.appUrl}/obcine/${idObcine}/predlogi`;
    return this.http
      .get<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }
  public pridobiNalogeIzvajalca(idIzvajalca: String): Observable<any> {
    const url: string = `${this.appUrl}/izvajalci/${idIzvajalca}/predlogi`;
    return this.http
      .get<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }
  public pridobiNovice(idObcine: String): Observable<any> {
    const url: string = `${this.appUrl}/obcine/${idObcine}/novice`;
    return this.http
      .get<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediIzvajalca(id: string, data: any): Observable<any> {
    const url: string = `${this.appUrl}/izvajalci/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http
      .put<any>(url, data, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediAdministratorja(id: string, data: any): Observable<any> {
    const url: string = `${this.appUrl}/administratorji/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http
      .put<any>(url, data, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediObcana(id: string, data: any): Observable<any> {
    const url: string = `${this.appUrl}/prijavljeniObcani/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http
      .put<any>(url, data, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediUpravnika(id: string, data: any): Observable<any> {
    const url: string = `${this.appUrl}/upravniki/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http
      .put<any>(url, data, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediPredlog(id: string, data: any): Observable<any> {
    const url: string = `${this.appUrl}/predlogi/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };

    return this.http
      .put<any>(url, data, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public ustvariNalogo(id: string, data: any): Observable<any> {
    const url: string = `${this.appUrl}/naloge/${id}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http
      .post<any>(url, data, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public ustvariNovico(idObcine: string, novica: Novica): Observable<any>{
      const url: string = `${this.appUrl}/novice/${idObcine}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    return this.http.post<any>(url,novica, httpLastnosti).pipe(retry(1),catchError(this.obdelajNapako));
  }
  public ustvariOpozorilo(idObcine: string, opozorilo: Opozorilo): Observable<any> {
    const url: string = `${this.appUrl}/opozorila/${idObcine}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };

    return this.http.post<any>(url, opozorilo, httpLastnosti).pipe(retry(1), catchError(this.obdelajNapako));
  }
  public izbrisiPredlog(idPredlog: string, idObcina: string, idAvtor: string): Observable<any> {
    console.log(idAvtor);
    const url: string = `${this.appUrl}/predlogi/${idObcina}/${idPredlog}/${idAvtor}`;
    const httpLastnosti = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem("zeton")}`,
      }),
    };
    console.log(url);
    return this.http
      .delete<any>(url, httpLastnosti)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiObcana(id: string): Observable<any> {
    const url: string = `${this.appUrl}/prijavljeniObcani/${id}`;
    return this.http
      .delete<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiAdmina(id: string): Observable<any> {
    const url: string = `${this.appUrl}/administratorji/${id}`;
    return this.http
      .delete<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiUpravnika(id: string): Observable<any> {
    const url: string = `${this.appUrl}/upravniki/${id}`;
    return this.http
      .delete<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiIzvajalca(id: string): Observable<any> {
    const url: string = `${this.appUrl}/izvajalci/${id}`;
    return this.http
      .delete<any>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  private obdelajNapako(napaka: HttpErrorResponse) {
    return throwError(
      () =>
        `Prišlo je do napake '${napaka.status}' z opisom '${
          napaka.error.status || napaka.statusText
        }'`
    );
  }

}
