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
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { DashboardInfogeneralComponent } from './components/dashboard-infogeneral/dashboard-infogeneral.component';
import { DashboardPreferenciasComponent } from './components/dashboard-preferencias/dashboard-preferencias.component';
import { DashboardHistorialComponent } from './components/dashboard-historial/dashboard-historial.component';
import { DashboardPremiosComponent } from './components/dashboard-premios/dashboard-premios.component';


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
    DashboardMenuComponent,
    DashboardInfogeneralComponent,
    DashboardPreferenciasComponent,
    DashboardHistorialComponent,
    DashboardPremiosComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
