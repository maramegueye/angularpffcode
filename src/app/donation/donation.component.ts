import { Component, ViewChild } from '@angular/core';
import { Donation } from '../models';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

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

  @ViewChild('webcam') webcamElement: any;
  public showWebcam = false;
  public webcamImage: WebcamImage | undefined;

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
    this.navigateToPage(operateur);
  }

  navigateToPage(operateur: string): void {
    this.router.navigateByUrl('/scanner');
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    // You can do something with the captured image here
  }

  public handleInitError(error: WebcamInitError): void {
    console.error('Webcam initialization failed:', error);
  }

  public startCapture(): void {
    this.showWebcam = true;
  }

  public stopCapture(): void {
    this.showWebcam = false;
  }
}
