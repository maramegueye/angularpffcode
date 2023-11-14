import { Component, OnInit } from '@angular/core';
import { FormulaireDemandeService } from '../formulaire-demande.service';
import { DemandeAdoption } from '../models';
import { Router } from '@angular/router';
@Component({
  selector: 'formulaire-adoption',
  templateUrl: './formulaire-adoption.component.html',
  styleUrls: ['./formulaire-adoption.component.scss']
})
export class FormulaireAdoptionComponent  {

  demandeAdoption:DemandeAdoption= {
    prenom:"",
    titre:"monsieur",
    nom: "",
    email:"@isepdiamniadio.edu.sn",
    telephone:"",
    message:""
  };
  successMessage:string='';
  errorMessage:string='';

  public enregistrer(): void {
    this.__formulairedemandeService.enregistrerDemande(this.demandeAdoption).subscribe(
      {
        next:(demandeAdoption) => {
          this.successMessage = 'demande enregistre reussi',demandeAdoption;
            alert('demande rendez-vous enregistrée avec succès');
           this.router.navigate(['/acceuil']);
        },
        error: (err)=> {
          this.errorMessage = ' error de demande.';
        }
        
      }
    );
     
  }
 
  constructor(private __formulairedemandeService: FormulaireDemandeService,private router: Router){}

  
  
}
