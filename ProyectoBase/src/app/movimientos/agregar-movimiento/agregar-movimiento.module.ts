import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarMovimientoPage } from './agregar-movimiento.page';

const routes: Routes = [
  {
    path: 'agregarMovimiento',
    component: AgregarMovimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarMovimientoPage]
})
export class AgregarMovimientoPageModule {}
