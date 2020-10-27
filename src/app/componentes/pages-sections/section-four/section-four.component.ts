import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit {

  reactive_form: FormGroup;

  constructor( private _formBuilder: FormBuilder ) {
     this.create_form();
  }

  create_form() {
    this.reactive_form = this._formBuilder.group ({
      textarea: ['']
    })
  }

  ngOnInit() {
  }

  form_data(){
    console.log (this.reactive_form.value);
  }

}
