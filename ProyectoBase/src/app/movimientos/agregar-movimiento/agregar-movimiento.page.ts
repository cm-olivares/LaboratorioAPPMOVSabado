import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-agregar-movimiento',
  templateUrl: './agregar-movimiento.page.html',
  styleUrls: ['./agregar-movimiento.page.scss'],
})
export class AgregarMovimientoPage implements OnInit {
  titulo: string;
  modalForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder,
    private modalController: ModalController,

  ) {
    this.modalForm = this.formBuilder.group({
      descripcion: ['',[Validators.required]],
      cantidad1: ['', [Validators.required]]
      });
  }

  ngOnInit() {
  }  
  get f() { return this.modalForm.controls; }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  modal() {
    console.log(this.modalForm.value);

      }

     
}
