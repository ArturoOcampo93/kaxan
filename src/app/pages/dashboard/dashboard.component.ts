import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  miseccion: number;
  vistaUsuario: any;
  porcentaje: number = 25;
  ngOnInit(): void {
    
    this.miseccion = 0
    this.vistaUsuario = JSON.parse(localStorage.getItem("datosKaxan"))
    //console.log(this.vistaUsuario);
    this.valorInput();
  }

  cambiaSeccion(seccion){
    this.miseccion = seccion
  }

  valorInput(){
    let val = this.porcentaje;
    console.log('Valor input', val);
    var $circle = $('#svg #bar');

    if (isNaN(val)) {
        val = 100;
    } else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);

        if (val < 0) { val = 0; }
        if (val > 100) { val = 100; }

        var pct = ((100 - val) / 100) * c;

        $circle.css({ strokeDashoffset: pct });

        $('#cont').attr('data-pct', val);
    }
    
  }

}
