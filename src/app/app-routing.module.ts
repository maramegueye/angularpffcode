import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { DonationComponent } from './donation/donation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { EnfantComponent } from './enfant/enfant.component';
import { EffectiltotalComponent } from './effectiltotal/effectiltotal.component';
import { AdminComponent } from './admin/admin.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';

// import { Error404Component } from './error404/error404.component';




const routes: Routes = [

  { path: '', component: AcceuilComponent },
  {path: 'acceuil',component: AcceuilComponent},
  { path: 'activites', component: ActivitesComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulaire-adoption',component: FormulaireAdoptionComponent},
  { path: 'donation',component: DonationComponent},
  { path: 'authentification',component: AuthentificationComponent},
  { path: 'enfant',component: EnfantComponent},
  {path: 'effectiftotal',component: EffectiltotalComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'personnel',component:PersonnelComponent},
  {path: 'list-personnel',component: ListPersonnelComponent},
  {path: 'add-personnel',component: AddPersonnelComponent}

 

  // {path:"**",component:Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
