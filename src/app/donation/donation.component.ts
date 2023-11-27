import { Component } from '@angular/core';
import { Donation } from '../models';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {

  donation: Donation = {
    nomcomplet: '',
    email: '@isepdiamniadio.edu.sn',
    telephone: '',
    montant: '',
    operation: '',
    reference: ''
  };
  successMessage: string = '';
  errorMessage: string = '';

  selectedPaymentMethod: string = '';

  constructor(private donationService: DonationService, private router: Router) { }

  enregistrer(): void {
    this.donationService.enregistrerDemande(this.donation).subscribe(
      (donation) => {
        this.successMessage = 'Demande enregistrée avec succès';
        alert('Donation enregistrée avec succès');
      },
      (err) => {
        this.errorMessage = 'Erreur lors de l\'enregistrement de la demande.';
      }
    );
  }
  captureOrangeMoneyDetails(): void {
    const amount = prompt('Entrez le montant du don:');
    const reference = prompt('Saisissez la référence de la transaction :');
    // alert('les donnes sont enregistrer merci')
    
    // Validate if the user entered the amount and reference
    if (amount !== null && reference !== null) {
      // Set the captured values to the donation object
      this.donation.montant = amount;
      this.donation.reference = reference;

      alert('Détails du don capturés avec succès Merci!');
    }
  }

  navigateToPage(paymentMethod: string): void {
    // You can implement navigation logic here based on the selected payment method
    this.selectedPaymentMethod = paymentMethod;
    this.router.navigate(['/payment', paymentMethod]); // Adjust the route accordingly
  }
}

