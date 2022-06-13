import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PromosComponent } from './pages/promos/promos.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mi-cuenta',
    component: MiCuentaComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'promos',
    component: PromosComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
