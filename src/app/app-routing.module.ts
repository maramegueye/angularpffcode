import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { DonsComponent } from './dons/dons.component';
import { ListEnfantComponent } from './list-enfant/list-enfant.component';
import { FormsModule } from '@angular/forms';





const routes: Routes = [

  { path: '', component: AcceuilComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulaire-adoption',component: FormulaireAdoptionComponent},
  { path: 'dons',component:DonsComponent},
  {path: 'liste_enfants',component:ListEnfantComponent}

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
