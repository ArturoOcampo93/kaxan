import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

import Swal from 'sweetalert2';
import { Md5 } from "md5-typescript";
import { MustMatch } from '../../_helpers/must-match.validator';
import { BuscacpService } from '../../services/buscacp.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-dashboard-infogeneral',
  templateUrl: './dashboard-infogeneral.component.html',
  styleUrls: ['./dashboard-infogeneral.component.scss']
})
export class DashboardInfogeneralComponent implements OnInit {

  //Declaras un nuevo FormGroup
  registroForm01: FormGroup;
  registroForm02: FormGroup;
  registroForm03: FormGroup;
  
  //Detectar envio formulario
  isSubmit01: Boolean = false;
  isSubmit02: Boolean = false;
  isSubmit03: Boolean = false;
  
  //habilita formularios
  habilita01: Boolean = false;

  //Procesa respuesta del servicio
  respuesta01: any;
  respuesta02: any;
  respuestaDatos: any;

  respuestaCp: any;

  miUsuario: any;
  miToken: string;
  dataUpdate: any = { };
  numFormulario : number;
  constructor(public formBuilder: FormBuilder, private router: Router, private buscacp: BuscacpService, private usuarioService: UsuarioService) {

    this.numFormulario = 0;

    this.registroForm01 = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]],
      password2: ['', [Validators.required]]
    }, { validator: MustMatch('password', 'password2') });

    this.registroForm02 = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*')]],
      fechanac: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
    });

    this.registroForm03 = this.formBuilder.group({
      calle: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ0-9 #.]*')]],
      municipio: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*')]],
      estado: ['', [Validators.required]],
      colonia: ['', [Validators.required]],
      interior: '',
      exterior: '',
      cp: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')]],
    });


    this.registroForm01.disable();
    this.registroForm02.disable();
    this.registroForm03.disable();

  }

  get errorControl01() {
    return this.registroForm01.controls;
  }

  get errorControl02() {
    return this.registroForm02.controls;
  }

  get errorControl03() {
    return this.registroForm03.controls;
  }


  ngOnInit(): void {

    this.miUsuario = JSON.parse(localStorage.getItem("datosKaxan"))
    //console.log(this.miUsuario.idUser);
  
    if (localStorage.getItem("token") == '' || localStorage.getItem("token") == 'undefined') { } else {
      this.miToken = localStorage.getItem("token");
    }

  }


  //post de formulario de nombre 01
  datosUser01(){
    this.isSubmit01 = true;
    if (this.registroForm01.valid) {
      
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();

      this.dataUpdate.email = this.registroForm01.value.email;
      this.dataUpdate.userName = this.registroForm01.value.nombre;
      this.dataUpdate.photoUrl = this.miUsuario.photoUrl;
      this.dataUpdate.percentageReg = this.miUsuario.percentage;
      this.dataUpdate.password = Md5.init(this.registroForm01.value.password);
      //console.log(JSON.stringify(this.dataUpdate));
      

      this.usuarioService.actualiza01(this.miToken, this.miUsuario.idUser, this.dataUpdate, 1).subscribe(resp => {
        this.respuesta01 = resp;
        //console.log(this.respuesta);
        //console.log(this.respuesta.succes);
        Swal.close();
        if (this.respuesta01.success == "200") {

          localStorage.setItem('token', this.respuesta01.token);
          localStorage.setItem('datosKaxan', JSON.stringify(this.respuesta01.dataUser));
          this.miUsuario = this.respuesta01.dataUser;
          //localStorage.setItem('registrado', 'ok');
          Swal.fire({
            allowOutsideClick: false,
            title: 'Bien Hecho',
            icon: 'success',
            text: `Registro correcto`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'

          }).then((result) => {
            if (result.isConfirmed) {
              this.numFormulario = 0;
              this.registroForm01.disable();
            }
          });

        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuesta01.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });
        }
      })

    }
    
  }


  datosUser02() {
    this.isSubmit02 = true;
    if (this.registroForm02.valid) {

      this.dataUpdate.firstname = this.registroForm02.value.firstname;
      this.dataUpdate.lastname = this.registroForm02.value.lastname;
      this.dataUpdate.fechanac = this.registroForm02.value.fechanac;
      this.dataUpdate.telefono = this.registroForm02.value.telefono;
      //console.log("dataString: ", JSON.stringify(this.dataUpdate));
      
      this.guardaData(2);
      
    }
    
  }
  
  datosUser03() {
    console.log("hola");
    console.log(this.registroForm03.valid);
    console.log(this.registroForm03);
    
    this.isSubmit03 = true;
    if (this.registroForm03.valid) {

      this.dataUpdate.calle = this.registroForm03.value.calle;
      this.dataUpdate.municipio = this.registroForm03.value.municipio;
      this.dataUpdate.estado = this.registroForm03.value.estado;
      this.dataUpdate.colonia = this.registroForm03.value.colonia;
      this.dataUpdate.interior = this.registroForm03.value.interior;
      this.dataUpdate.exterior = this.registroForm03.value.exterior;
      this.dataUpdate.cp = this.registroForm03.value.cp;
      console.log(JSON.stringify(this.dataUpdate));
      this.guardaData(3);

    }
  }

  editaFormulario(numeroForm){
    //this.registroForm01.disable();
    if(numeroForm == 1){
      this.registroForm01.enable();
    }
    if(numeroForm == 2){
      this.registroForm02.enable();
    }
    if(numeroForm == 3){
      this.registroForm03.enable();
    }
    this.numFormulario = numeroForm;
  }


  //busca por CP
  buscaCP() {
    //console.log(id);
    Swal.fire({
      title: 'CP',
      icon: 'info',
      input: 'text',
      text: `Introduce tu Código postal`,
      confirmButtonText: 'Aceptar',
      showCancelButton: true,

    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value);
        this.buscaDatosCP(result.value)
        //buscaDireccion
        
      }
    });
  }

  buscaDatosCP(cp){
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();

    this.buscacp.buscaDireccion(cp).subscribe( resp =>{
      let respuestaEstados:any = resp
      Swal.close();
      if (respuestaEstados.success == 200){
        this.respuestaCp = respuestaEstados.estados;
        console.log(this.respuestaCp);
        console.log(this.respuestaCp[0]);
        console.log(this.respuestaCp[0].Ciudad);
        this.registroForm03.controls.cp.setValue((this.respuestaCp[0].CP));
        this.registroForm03.controls.municipio.setValue((this.respuestaCp[0].Ciudad));
        this.registroForm03.controls.estado.setValue((this.respuestaCp[0].Entidad));
        this.registroForm03.controls.colonia.setValue(0);
        

      }else{
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: "No se encontro el CP",
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#F8671B'
        });
      }      
    })
    

  }

  buscaInformacionCompleta(){

    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();

    this.usuarioService.datosCompletos(this.miUsuario.idUser).subscribe(resp => {
      Swal.close();
      let respuesta: any = resp;
      console.log(respuesta);
      this.respuestaDatos = respuesta.data[0];
      //console.log(this.respuestaDatos.userName);
      this.editaFormulario(4);
      
      this.respuestaCp = [{ "Colonia": this.respuestaDatos.colonia}]
      this.registroForm03.controls.calle.setValue((this.respuestaDatos.calle));
      this.registroForm03.controls.municipio.setValue(this.respuestaDatos.municipio);
      this.registroForm03.controls.estado.setValue((this.respuestaDatos.ciudad));
      this.registroForm03.controls.colonia.setValue((this.respuestaDatos.colonia));
      this.registroForm03.controls.interior.setValue((this.respuestaDatos.interior));
      this.registroForm03.controls.exterior.setValue((this.respuestaDatos.exterior));
      this.registroForm03.controls.cp.setValue(this.respuestaDatos.cp);

      this.registroForm02.controls.firstname.setValue(this.respuestaDatos.firstName);
      this.registroForm02.controls.lastname.setValue(this.respuestaDatos.lastName);
      this.registroForm02.controls.fechanac.setValue(this.respuestaDatos.fechanac);
      this.registroForm02.controls.telefono.setValue(this.respuestaDatos.telefono);

      this.registroForm01.controls.email.setValue(this.respuestaDatos.email);
      this.registroForm01.controls.nombre.setValue(this.respuestaDatos.userName);

    })
  }

  guardaData(bloque:any){

    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();

    this.usuarioService.actualiza01(this.miToken, this.miUsuario.idUser, this.dataUpdate,bloque).subscribe(resp => {
      this.respuesta01 = resp;
      //console.log(this.respuesta);
      //console.log(this.respuesta.succes);
      Swal.close();
      if (this.respuesta01.success == "200") {

        this.miUsuario.percentage = this.respuesta01.percentage
        localStorage.setItem('datosKaxan', JSON.stringify(this.miUsuario));
        Swal.fire({
          allowOutsideClick: false,
          title: 'Bien Hecho',
          icon: 'success',
          text: `Registro correcto`,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#F8671B'

        }).then((result) => {
          if (result.isConfirmed) {
            this.numFormulario = 0;
            this.registroForm02.disable();
            this.registroForm03.disable();
          }
        });

      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: this.respuesta01.error_msg,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#F8671B'
        });
      }
    })
  }
  

}
