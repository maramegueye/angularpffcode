import { NgModule } from '@angular/core';  // Correction de l'importation

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { ProposComponent } from './propos/propos.component';
import { DonsComponent } from './dons/dons.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { RegisterAdoptionComponent } from './register-adoption/register-adoption.component';
import { AdminComponent } from './admin/admin.component';
import { ListEnfantComponent } from './list-enfant/list-enfant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ContactComponent,
    AcceuilComponent,
    ActivitesComponent,
    ProposComponent,
    DonsComponent,
    ListeRendezVousComponent,
    ListeEmployesComponent,
    FormulaireAdoptionComponent,
    RegisterAdoptionComponent,
    AdminComponent,
    ListEnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
