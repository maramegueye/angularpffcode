import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { ProposComponent } from './propos/propos.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { FormulaireAdoptionComponent } from './formulaire-adoption/formulaire-adoption.component';
import { RegisterAdoptionComponent } from './register-adoption/register-adoption.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DonationComponent } from './donation/donation.component';
import { EffectiltotalComponent } from './effectiltotal/effectiltotal.component';
import { ScannerComponent } from './scanner/scanner.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { EnfantComponent } from './enfant/enfant.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ContactComponent,
    AcceuilComponent,
    ActivitesComponent,
    ProposComponent,
    ListeRendezVousComponent,
    ListeEmployesComponent,
    FormulaireAdoptionComponent,
    RegisterAdoptionComponent,
    AdminComponent,
    DonationComponent,
    EffectiltotalComponent,
    ScannerComponent,
    PersonnelComponent,
    AddPersonnelComponent,
    ListPersonnelComponent,
    EnfantComponent,
    ListPersonnelComponent,
    AddPersonnelComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
