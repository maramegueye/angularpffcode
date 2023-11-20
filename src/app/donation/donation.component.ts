import { Component } from '@angular/core';
import { Donation } from '../models';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router'; // Ajoutez l'import pour le service Router

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {

  donation: Donation = {
    nomcomplet: "",
    email: "@isepdiamniadio.edu.sn",
    telephone: "",
    montant: "",
    operation: "",
    reference: ""
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private donationService: DonationService, private router: Router) { }

  enregistrer(): void {
    this.donationService.enregistrerDemande(this.donation).subscribe(
      {
        next: (donation) => {
          this.successMessage = 'Demande enregistrée avec succès';
          alert('Donation enregistrée avec succès');
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de l\'enregistrement de la demande.';
        }
      }
    );
  }

  setOperateur(operateur: string): void {
    this.donation.operation = operateur;
    alert(operateur);
    this.navigateToPage(operateur); // Appeler correctement la méthode navigateToPage
  }

  navigateToPage(operateur: string): void {
    // Utilisez la méthode navigate pour naviguer vers une autre page
    this.router.navigate(['/scanner', operateur]);
  }
}
