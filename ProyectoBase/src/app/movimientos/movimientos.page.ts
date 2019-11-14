import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarMovimientoPage } from './agregar-movimiento/agregar-movimiento.page';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  public movimientos;
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.movimientos = [
      {
      descripcion: '7-eleven Papitas',
      cantidad:-18,
      tipo:2,
      cuenta:{
        nombre: 'Credito Banorte',
        id:1
      },
      etiquetas:{
        id:1,
        descripcion: 'Comida'
      },
      fecha: '2019-11-08'
    },
    {
      descripcion: 'Pago agua',
      cantidad:-360,
      tipo:2,
      cuenta:{
        nombre: 'Debito Banregio',
        id:2
      },
      etiquetas:{
        id:2,
        descripcion: 'Hogar'
      },
      fecha: '2019-11-09'
    },
    {
      descripcion: 'Quincena',
      cantidad:+7500,
      tipo:1,
      cuenta:{
        nombre: 'Credito BBVA',
        id:3
      },
      etiquetas:{
        id:3,
        descripcion: 'Sueldo'
      },
      fecha: '2019-11-10'
    },
    {
      descripcion: 'Colegiatura',
      cantidad:-2500,
      tipo:2,
      cuenta:{
        nombre: 'Debito Banamex',
        id:4
      },
      etiquetas:{
        id:4,
        descripcion: 'Educacion'
      },
      fecha: '2019-11-12'
    }

    ];
  }


  async openmodal(){
    const modal = await this.modalController.create({
      component: AgregarMovimientoPage,
      componentProps: {
        titulo: 'Agregar Movimiento'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }

}
