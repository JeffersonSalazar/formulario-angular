import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Secciones del aplicativo
import { SectionOneComponent } from './componentes/pages-sections/section-one/section-one.component';
import { SectionTwoComponent } from './componentes/pages-sections/section-two/section-two.component';
import { SectionThreeComponent } from './componentes/pages-sections/section-three/section-three.component';
import { SectionFourComponent } from './componentes/pages-sections/section-four/section-four.component';

// Rutas del aplicativo
const RUTAS: Routes = [
  { path: 'sect-one', component: SectionOneComponent },
  { path: 'sect-two', component: SectionTwoComponent },
  { path: 'sect-three', component: SectionThreeComponent },
  { path: 'sect-four', component: SectionFourComponent },

  // Redireccionamiento por error
  { path: '**', pathMatch: 'full', redirectTo: 'sect-one' },
];

@NgModule({
  imports: [RouterModule.forRoot( RUTAS, {useHash: true} )],
  exports: [RouterModule]
})

export class AppRutasModule {}
