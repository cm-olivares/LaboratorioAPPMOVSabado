import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovimientosPage } from './movimientos.page';
import { AgregarMovimientoPageModule } from './agregar-movimiento/agregar-movimiento.module';


const routes: Routes = [
  {
    path: '',
    component: MovimientosPage
  }
];

@NgModule({
  imports: [
    AgregarMovimientoPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MovimientosPage]
})
export class MovimientosPageModule {}
