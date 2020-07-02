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
    ContHorizontalRecomendacionesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
