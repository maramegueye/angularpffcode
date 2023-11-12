import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { DonsComponent } from './dons/dons.component';
// import { Error404Component } from './error404/error404.component';




const routes: Routes = [

  { path: '', component: AcceuilComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulaire-adoption',component: FormulaireAdoptionComponent},
  { path: 'dons',component:DonsComponent}

  // {path:"**",component:Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
