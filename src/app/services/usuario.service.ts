import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface usuario {
  token: string
  email: string
  userName: string
  firstName: string
  lastName: string
  name: string
  photoUrl: string
  provider: string
  percentage: number
  password:string
}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url: string = "http://localhost/KAXAN/restFront";
  MI_TOKEN: string = "";
    
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      //'Authorization': 'Basic ' + btoa('admin:admin'),
    }),
  };

  // Http Options beareber
  httpOptionsBeareber = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${this.MI_TOKEN}`,
    }),
  };

  //registro web
  registro(miUser: usuario) {

    const body = new HttpParams()
      .set('email', miUser.email)
      .set('contrasena', miUser.password)
      .set('percentageReg', miUser.percentage.toString())
      .set('photoUrl', miUser.photoUrl)
      .set('provider', miUser.provider)
      .set('userName', miUser.userName);

    return this.http.post(

      `${this.url}/registro`,
      body.toString(),
      this.httpOptions
    );
  }

  registroSocial(miUser: usuario) {

    const body = new HttpParams()
      .set('email', miUser.email)
      .set('contrasena', miUser.password)
      .set('percentageReg', miUser.percentage.toString())
      .set('photoUrl', miUser.photoUrl)
      .set('provider', miUser.provider)
      .set('userName', miUser.userName)
      .set('firstName', miUser.firstName)
      .set('lastName', miUser.lastName);

    return this.http.post(

      `${this.url}/registro`,
      body.toString(),
      this.httpOptions
    );
  }


  login(email: string, contrasena: string){
    const body = new HttpParams()
      .set('usuario', email)
      .set('contrasena', contrasena);
    return this.http.post(

      `${this.url}/login`,
      body.toString(),
      this.httpOptions
    );
  }
  
  
  codigoRecuperacion(email: string){
    const body = new HttpParams()
    .set('email', email);
    return this.http.post(
      
      `${this.url}/recupera`,
      body.toString(),
      this.httpOptions
      );
  }

  actualizaPassword(email: string, contrasena: string, codigo: string){
    const body = new HttpParams()
      .set('email', email)
      .set('contrasena', contrasena)
      .set('codigo', codigo);
    return this.http.post(

      `${this.url}/actualizaPass`,
      body.toString(),
      this.httpOptions
    );
  }

  datosCompletos(idUser: string){
    if (localStorage.getItem("token") == '' || localStorage.getItem("token") == 'undefined') { } else {
      this.MI_TOKEN = localStorage.getItem("token");
    }
    const body = new HttpParams()
      .set('idUser', idUser)
      .set('token', this.MI_TOKEN);
    return this.http.post(
      `${this.url}/datosUser`,
      body.toString(),
      //this.httpOptionsBeareber
      this.httpOptions
    );

  }

  actualiza01(token: string, idUser:string, datosUpdate:any, bloque:any){
    const body = new HttpParams()
      .set('token', token)
      .set('idUser', idUser)
      .set('bloque', bloque)
      .set('datosUser', JSON.stringify(datosUpdate));

    return this.http.post(
      `${this.url}/actualizaUser`,
      body.toString(),
      this.httpOptions
    );
  }

}
