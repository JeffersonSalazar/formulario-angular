import { NgModule } from '@angular/core';

// Modulos Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


let angular_material: any[] = [
  MatButtonModule,
  MatInputModule,
  MatRadioModule
]


@NgModule({
  declarations: [],

  imports: [
    angular_material
  ],

  exports: [
    angular_material
  ]
})

export class AngularMaterialModule { }
