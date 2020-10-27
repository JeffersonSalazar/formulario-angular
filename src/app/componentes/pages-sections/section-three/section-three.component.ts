import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})

export class SectionThreeComponent implements OnInit {

  reactive_form: FormGroup;

  constructor( private _formBuilder: FormBuilder ) {
     this.create_form();
  }

  create_form() {
    this.reactive_form = this._formBuilder.group ({
      correo: [ '' ],
      contrasenia: [ '' ],
      validar: [ '' ], 
    })
  }

  ngOnInit() {
  }

  form_data(){
    console.log (this.reactive_form.value);
  }

  get validar_correo() {
    return this.reactive_form.get('correo').invalid
    && this.reactive_form.get('correo').touched
  };

  get validar_contrasenia() {
    return this.reactive_form.get('contrasenia').invalid
    && this.reactive_form.get('contrasenia').touched
  };

  get validar_valid() {
    return this.reactive_form.get('validar').invalid
    && this.reactive_form.get('validar').touched
  };

}
