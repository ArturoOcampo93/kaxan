import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';

import { AppRoutingModule } from './app-routing.module';
import { PromoPagadasComponent } from './components/promo-pagadas/promo-pagadas.component';
import { ContGeneralComponent } from './components/cont-general/cont-general.component';
import { BoxComponent } from './components/box/box.component';
import { ContHorizontalComponent } from './components/cont-horizontal/cont-horizontal.component';
import { ContHorizontalRecomendacionesComponent } from './components/cont-horizontal-recomendaciones/cont-horizontal-recomendaciones.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardInfogeneralComponent } from './components/dashboard-infogeneral/dashboard-infogeneral.component';
import { DashboardPreferenciasComponent } from './components/dashboard-preferencias/dashboard-preferencias.component';
import { DashboardHistorialComponent } from './components/dashboard-historial/dashboard-historial.component';
import { DashboardPremiosComponent } from './components/dashboard-premios/dashboard-premios.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//social login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiCuentaComponent,
    HeaderComponent,
    FooterComponent,
    BannerPrincipalComponent,
    PromoPagadasComponent,
    ContGeneralComponent,
    BoxComponent,
    ContHorizontalComponent,
    ContHorizontalRecomendacionesComponent,
    DashboardComponent,
    DashboardInfogeneralComponent,
    DashboardPreferenciasComponent,
    DashboardHistorialComponent,
    DashboardPremiosComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '423053101802-skjbm8a20lnaapnshbphpkmph6q6dc0t.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '417861433389821'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
