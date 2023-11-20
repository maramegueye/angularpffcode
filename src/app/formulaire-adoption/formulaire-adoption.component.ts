import { Component } from '@angular/core';
import { FormulaireDemandeService } from '../formulaire-demande.service';
import { DemandeAdoption } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'formulaire-adoption',
  templateUrl: './formulaire-adoption.component.html',
  styleUrls: ['./formulaire-adoption.component.scss']
})
export class FormulaireAdoptionComponent {

  demandeAdoption: DemandeAdoption = {
    prenom: "",
    titre: "monsieur",
    nom: "",
    email: "@isepdiamniadio.edu.sn",
    telephone: "",
    message: ""
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private formulaireDemandeService: FormulaireDemandeService, private router: Router) {}

  public enregistrer(): void {
    this.formulaireDemandeService.enregistrerDemande(this.demandeAdoption).subscribe(
      (demandeAdoption) => {
        this.successMessage = 'Demande enregistrée avec succès';
        alert('Demande rendez-vous enregistrée avec succès');
        this.router.navigateByUrl('/acceuil');
      },
      (err) => {
        this.errorMessage = 'Erreur de demande.';
      }
    );
  }
}
