import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

import Swal from 'sweetalert2';
import { UsuarioService, usuario } from '../../services/usuario.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

import { Md5 } from "md5-typescript";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {



    // constructor() { }
    // miseccion: number;
    // vistaUsuario: any;
    // porcentaje: number = 25;
    // ngOnInit(): void {
      
    //   this.miseccion = 0
    //   this.vistaUsuario = JSON.parse(localStorage.getItem("datosKaxan"))
    //   //console.log(this.vistaUsuario);
    //   this.valorInput();
    // }
  
    // cambiaSeccion(seccion){
    //   this.miseccion = seccion
    // }
  
    // valorInput(){
    //   let val = this.porcentaje;
    //   console.log('Valor input', val);
    //   var $circle = $('#svg2 #bar2');
  
    //   if (isNaN(val)) {
    //       val = 100;
    //   } else {
    //       var r = $circle.attr('r');
    //       var c = Math.PI * (r * 2);
  
    //       if (val < 0) { val = 0; }
    //       if (val > 100) { val = 100; }
  
    //       var pct = ((100 - val) / 100) * c;
  
    //       $circle.css({ strokeDashoffset: pct });
  
    //       $('#cont2').attr('data-pct', val);
    //   }
      
    // }
  




  @ViewChild('closebutton') closebutton;


  //Declaras un nuevo FormGroup
  registroForm: FormGroup;
  loginForm: FormGroup;
  codigoForm: FormGroup;
  recuperaForm: FormGroup;

  //Detectar envio formulario
  isSubmit: Boolean = false;
  isSubmitLogin: boolean = false;
  isSubmitCodigo: boolean = false;
  isSubmitRecupera: boolean = false;

  //Procesa respuesta del servicio
  respuesta: any;
  respuestaLogin: any;
  respuestaCodigo:any;
  respuestaRecupera: any;
  passwordLogin: string = "";
  emailLogin: string = "";

  miUsuario : usuario = <usuario>{
    photoUrl: "https://myma-demos.com.mx/KAXAN/imagesAvatar/avatar.png",
    provider: "web",
    percentage: 25
  }

  //usuario logueado
  isLogin = false;
  vistaUsuario: any = {
    userName: "",
    photoUrl: "",
    email: "",
    percentage: 0
  }

  //social login
  socialUser!: SocialUser;
  isLoggedin: boolean = false;
  tipoValidacion: string ="";

  //isChecked: boolean= false;

  isChecked: any = {
    recuerda: false,
    email:""
  }

  //recupera
  recuperaCodigo: boolean = true;




  //se meten componentes a usar
  constructor(public formBuilder: FormBuilder, private router: Router, private usuaioService: UsuarioService, private authService: SocialAuthService, private socialAuthService: SocialAuthService) {

    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]]
    });

    this.loginForm = this.formBuilder.group({
      emailLogin: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      passwordLogin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]],
      recuerda: ['']
    });
    
    this.codigoForm = this.formBuilder.group({
      emailCodigo: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]]
    });
    
    this.recuperaForm = this.formBuilder.group({
      emailRegistrado: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      codigo: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ0-9 ]*')]],
      passwordCodigo: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]]
    });
  }

  get errorControl() {
    return this.registroForm.controls;
  }

  get errorControlLogin() {
    return this.loginForm.controls;
  }

  get errorControlCodigo() {
    return this.codigoForm.controls;
  }

  get errorControlRecupera() {
    return this.recuperaForm.controls;
  }

  //Al cargar la pagina, es lo primero en arrancar
  ngOnInit(): void {
    //recupera datos del usuario
    if (localStorage.getItem("datosKaxan") == '' || localStorage.getItem("datosKaxan") == 'undefined') { }else{
      this.vistaUsuario = JSON.parse(localStorage.getItem("datosKaxan"));
      
      this.isLogin = true;
    }
    
    //recupera datos de recuerda
    
    if (localStorage.getItem("recuerdaKaxan") == '' || localStorage.getItem("recuerdaKaxan") == 'undefined' || localStorage.getItem("recuerdaKaxan") == null) {  }else{
      this.isChecked = JSON.parse(localStorage.getItem("recuerdaKaxan"));
      this.isChecked.email = atob(this.isChecked.email)
      this.loginForm.controls.emailLogin.setValue(this.isChecked.email);
      this.loginForm.controls.recuerda.setValue(this.isChecked.recuerda);
      console.log(this.isChecked.email);
    }

    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      
      if (this.tipoValidacion == "registro"){
        this.miUsuario.email = this.socialUser.email;
        this.miUsuario.firstName = this.socialUser.firstName;
        this.miUsuario.lastName = this.socialUser.lastName;
        this.miUsuario.name = this.socialUser.name;
        this.miUsuario.userName = this.socialUser.name;
        this.miUsuario.photoUrl = this.socialUser.photoUrl;
        this.miUsuario.password = this.socialUser.id;
        this.registroSocial();        
      }else{
        this.emailLogin = this.socialUser.email;
        this.passwordLogin = this.socialUser.id;
        this.loginSocial();
      }
    });

  }

  registro(){
    this.isSubmit = true;
    if (this.registroForm.valid) {
      this.closebutton.nativeElement.click(); //cerramos modal
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();
      
      this.miUsuario.email = this.registroForm.value.email;
      this.miUsuario.userName = this.registroForm.value.nombre;
      this.miUsuario.password = Md5.init(this.registroForm.value.password); 

      this.usuaioService.registro(this.miUsuario).subscribe( resp =>{
        this.respuesta = resp;
        //console.log(this.respuesta);
        //console.log(this.respuesta.succes);
        Swal.close();
        if (this.respuesta.success == "200") {

          localStorage.setItem('token', this.respuesta.token);
          localStorage.setItem('datosKaxan', JSON.stringify(this.respuesta.dataUser));
          this.vistaUsuario = this.respuesta.dataUser;
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
              this.isLogin = true;
              this.router.navigateByUrl('/dashboard');
            }
          });

        }else{
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuesta.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });
        }
      })

    }
  }

  kaxanOut(){
    $('#profile').modal('hide');
    this.isLogin = false;
    localStorage.setItem('token', '');
    localStorage.setItem('datosKaxan', '');
    this.router.navigateByUrl('/home');
  }
  irPerfil(){
    $('#profile').modal('hide');
    this.router.navigateByUrl('/dashboard');
  }


  /********************************
   * REGISTRO Y LOGIN SOCIAL 
   * *******************************/
  registroSocial(){
    
    this.closebutton.nativeElement.click(); //cerramos modal
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();
    this.usuaioService.registroSocial(this.miUsuario).subscribe(resp => {
      this.respuesta = resp;
      Swal.close();
      if (this.respuesta.success == "200") {
        this.logOut();
        
        localStorage.setItem('token', this.respuesta.token);
        localStorage.setItem('datosKaxan', JSON.stringify(this.respuesta.dataUser));
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
            this.isLogin = true;
            this.router.navigateByUrl('/dashboard');
          }
        });
        
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: this.respuesta.error_msg,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#F8671B'
        });
      }
      
      
    })
    
  } //fin registro social 
  
  
  loginWithGoogle(tipo:string): void {
    this.miUsuario.provider="google";
    this.tipoValidacion = tipo;
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    //console.log("clic");
  }
  
  loginWithFacebook(tipo:string): void {
    this.miUsuario.provider="facebook";
    this.tipoValidacion = tipo;
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  logOut(): void {
    this.socialAuthService.signOut();
  }

  /********************************
   * REGISTRO Y LOGIN SOCIAL 
   * *******************************/

  login(){

    this.isSubmitLogin = true;
    if (this.loginForm.valid) {
      $("#ModalRegistro").modal('hide');
      this.closebutton.nativeElement.click(); //cerramos modal
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();

      this.emailLogin = this.loginForm.value.emailLogin;
      this.passwordLogin = Md5.init(this.loginForm.value.passwordLogin); 

      if (this.isChecked.recuerda){
        this.isChecked.email = btoa(this.emailLogin) //desencripta-> atob
        localStorage.setItem('recuerdaKaxan', JSON.stringify(this.isChecked));        
      }else{
        localStorage.setItem('recuerdaKaxan', "");        
      }
      this.usuaioService.login(this.emailLogin, this.passwordLogin).subscribe(resp => {
        //console.log(resp);        
        this.respuestaLogin = resp;
        Swal.close();

        if (this.respuestaLogin.success == "200") {
  
          localStorage.setItem('token', this.respuestaLogin.token);
          localStorage.setItem('datosKaxan', JSON.stringify(this.respuestaLogin.dataUser));
          //localStorage.setItem('registrado', 'ok');
          Swal.fire({
            allowOutsideClick: false,
            title: 'Bien Hecho',
            icon: 'success',
            text: `Login correcto`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
  
          }).then((result) => {
            if (result.isConfirmed) {
              this.isLogin = true;
              this.router.navigateByUrl('/dashboard');
            }
          });
  
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuestaLogin.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });
        }
      })
    }
  }//fin login


  loginSocial() {

    $("#ModalRegistro").modal('hide');

      this.closebutton.nativeElement.click(); //cerramos modal
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();

      this.usuaioService.login(this.emailLogin, this.passwordLogin).subscribe(resp => {
        //console.log(resp);        
        this.respuestaLogin = resp;
        Swal.close();
        if (this.respuestaLogin.success == "200") {

          localStorage.setItem('token', this.respuestaLogin.token);
          localStorage.setItem('datosKaxan', JSON.stringify(this.respuestaLogin.dataUser));
          //localStorage.setItem('registrado', 'ok');
          Swal.fire({
            allowOutsideClick: false,
            title: 'Bien Hecho',
            icon: 'success',
            text: `Login correcto`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'

          }).then((result) => {
            if (result.isConfirmed) {
              this.isLogin = true;
              this.router.navigateByUrl('/dashboard');
            }
          });

        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuestaLogin.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });
        }
      })
    
  }//fin login


  //recuerda usuario
  isCheckedRecuerda() {
    this.isChecked.recuerda = !this.isChecked.recuerda;
    //console.log(this.isChecked);
  }

  //olvidaste contraseña mostrar modal
  olvidasteContrasen(){
    $("#ModalRegistro").modal('hide');
    $("#ModalRecupera").modal('show');    
  }

  recuperaCodigoVista( valor: boolean ){
    this.recuperaCodigo = valor;    
  }

  //recupera codigo
  getCodigo(){
    
    this.isSubmitCodigo = true;
    if (this.codigoForm.valid) {
      $("#ModalRecupera").modal('hide');
      this.closebutton.nativeElement.click(); //cerramos modal
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();

      this.usuaioService.codigoRecuperacion(this.codigoForm.value.emailCodigo).subscribe(resp => {
        //console.log(resp);        
        this.respuestaCodigo = resp;
        Swal.close();

        if (this.respuestaCodigo.success == "200") {

          Swal.fire({
            allowOutsideClick: false,
            title: 'Bien Hecho',
            icon: 'success',
            text: this.respuestaCodigo.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'

          });

        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuestaCodigo.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });
        }
      })

    }

  }

  //nueva contraseña
  getContrasena(){
    //console.log("send contraseña");
    
    this.isSubmitRecupera = true;
    if (this.recuperaForm.valid) {
      $("#ModalRecupera").modal('hide');
      this.closebutton.nativeElement.click(); //cerramos modal
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();
      const tempPass = this.passwordLogin = Md5.init(this.recuperaForm.value.passwordCodigo);
      this.usuaioService.actualizaPassword(this.recuperaForm.value.emailRegistrado, tempPass, this.recuperaForm.value.codigo).subscribe(resp => {
        //console.log(resp);        
        this.respuestaRecupera = resp;
        Swal.close();

        if (this.respuestaRecupera.success == "200") {

          Swal.fire({
            allowOutsideClick: false,
            title: 'Bien Hecho',
            icon: 'success',
            text: this.respuestaRecupera.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });

        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuestaRecupera.error_msg,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#F8671B'
          });
        }
      })

    }

  }

  


  
}