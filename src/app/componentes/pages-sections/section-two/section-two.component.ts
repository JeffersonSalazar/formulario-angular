import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})

export class SectionTwoComponent implements OnInit {

  reactive_form: FormGroup;

  constructor( private _formBuilder: FormBuilder ) {
     this.create_form();
  }

  create_form() {
    this.reactive_form = this._formBuilder.group ({
      recidencia: [ '' ],
      nacimiento: [ '' ],
      lugar: [ '' ],
    })
  }

  ngOnInit() {
  }

  form_data(){
    console.log (this.reactive_form.value);
  }

  get validar_recidencia() {
    return this.reactive_form.get('recidencia').invalid
    && this.reactive_form.get('recidencia').touched
  };

  get validar_nacimiento() {
    return this.reactive_form.get('nacimiento').invalid
    && this.reactive_form.get('nacimiento').touched
  };

  get validar_lugar() {
    return this.reactive_form.get('lugar').invalid
    && this.reactive_form.get('lugar').touched
  };

}
