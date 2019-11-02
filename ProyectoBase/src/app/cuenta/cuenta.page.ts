import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})

export class CuentaPage implements OnInit {
  public cuentas;
  dataReturned:any;

  constructor( public modalController: ModalController ) { }

  
    ngOnInit() {
    this.cuentas = [
      {Cantidad: 1555.00, Nombre: 'Crédito Banorte'},
      {Cantidad: 1.50, Nombre: 'Débito Banregio'}, 
      {Cantidad: -1555.00, Nombre: 'Crédito BBVA'},
      {Cantidad: 500.00, Nombre: 'Débito Banamex'},
    ];
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      
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

     

