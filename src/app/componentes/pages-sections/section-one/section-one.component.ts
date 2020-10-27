import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})

export class SectionOneComponent implements OnInit {

  title: string = 'Sign In';

  reactive_form: FormGroup;

  constructor( private _formBuilder: FormBuilder ) {
     this.create_form();
  }

  create_form() {
    this.reactive_form = this._formBuilder.group ({
      nombre: [ '' ],
      apellido: [ '' ]
    })
  }

  ngOnInit() {
  }

  form_data(){
    console.log (this.reactive_form.value);

    // if (this.reactive_form.invalid) {
    //   return Object.values(this.reactive_form.controls).forEach(control => {
    //     control.markAsTouched();
    //   })
    // }
  }

  get validar_nombre() {
    return this.reactive_form.get('nombre').invalid
    && this.reactive_form.get('nombre').touched
  };

  get validar_apellido() {
    return this.reactive_form.get('apellido').invalid
    && this.reactive_form.get('apellido').touched
  };
}
