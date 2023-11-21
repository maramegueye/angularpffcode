import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { DonsComponent } from './dons/dons.component';
import { AdopteurComponent } from './adopteur/adopteur.component';
import { ListeAdopteurComponent } from './liste-adopteur/liste-adopteur.component';
import { AddAdopteurComponent } from './add-adopteur/add-adopteur.component';
import { UpdateAdopteurComponent } from './update-adopteur/update-adopteur.component';
// import { Error404Component } from './error404/error404.component';




const routes: Routes = [

  { path: '', component: AcceuilComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulaire-adoption',component: FormulaireAdoptionComponent},
  { path: 'dons',component:DonsComponent},
 { path: 'adopteur',component:AdopteurComponent},
 { path: 'liste-adopteur',component:ListeAdopteurComponent},
 { path: 'add-adopteur',component:AddAdopteurComponent},
 { path: 'update-adopteur',component:UpdateAdopteurComponent},
  // {path:"**",component:Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
