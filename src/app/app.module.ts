import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Rutas del aplicativo
import { AppRutasModule } from './app-routing.module';

// Secciones del aplicativo
import { SectionOneComponent } from './componentes/pages-sections/section-one/section-one.component';
import { SectionTwoComponent } from './componentes/pages-sections/section-two/section-two.component';
import { SectionThreeComponent } from './componentes/pages-sections/section-three/section-three.component';
import { SectionFourComponent } from './componentes/pages-sections/section-four/section-four.component';

// Formulario Reactivo
import { ReactiveFormsModule } from "@angular/forms";

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

@NgModule({

  declarations: [
    AppComponent,

    // Secciones del aplicativo
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],

  imports: [
    BrowserModule,

    // Rutas del Aplicativo
    AppRutasModule,

    // Angular Material
    BrowserAnimationsModule,
    AngularMaterialModule,

    // Formulario Reactivo
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
