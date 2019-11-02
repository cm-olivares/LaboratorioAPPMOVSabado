import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  modalForm: FormGroup;
 

  
  constructor(public formBuilder: FormBuilder) {
    
      this.modalForm = this.formBuilder.group({
      nombres: ['',[Validators.required]],
      cuenta: ['', [Validators.required]]
      });
  }

  ngOnInit() {}
  get f() { return this.modalForm.controls; }



  modal() {
    console.log(this.modalForm.value);
    
      }
  }


