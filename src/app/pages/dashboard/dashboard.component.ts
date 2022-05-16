import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  miseccion: number;
  vistaUsuario: any;
  ngOnInit(): void {
    
    this.miseccion = 0
    this.vistaUsuario = JSON.parse(localStorage.getItem("datosKaxan"))
    //console.log(this.vistaUsuario);
  }

  cambiaSeccion(seccion){
    this.miseccion = seccion
  }

}
