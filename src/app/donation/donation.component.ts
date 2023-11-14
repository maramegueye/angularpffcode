import { Component } from '@angular/core';
import { Donation } from '../models';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {

  donation:Donation= {
    nomcomplet:"",
    email:"@isepdiamniadio.edu.sn",
    telephone: "",
    montant:"",
    operation:"",
    reference:""

  };
  successMessage:string='';
  errorMessage:string='';

  public enregistrer(): void {
    this.____donationService.enregistrerDemande(this.donation).subscribe(
      {
        next:(donation) => {
          this.successMessage = 'demande enregistre reussi',donation;
          alert('Donation enregistrée avec succès');
        
        },
        error: (err)=> {
          this.errorMessage = ' error de demande.';
        }
        
      }
    );

}
constructor(private ____donationService: DonationService){}
}
