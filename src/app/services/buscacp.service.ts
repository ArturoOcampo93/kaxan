import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscacpService {

  url: string = "https://myma-demos.com.mx/KAXAN/restFront/";
  //url: string = "http://localhost/KAXAN/restFront";

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      //'Authorization': 'Basic ' + btoa('admin:admin'),
    }),
  };

  buscaDireccion(cp: string) {
    const body = new HttpParams()
      .set('cp', cp);

    return this.http.post( `${this.url}/buscacp`, body.toString(), this.httpOptions);
  }


}
