import { Component, OnInit } from '@angular/core';
import { Adopteur } from '../models';
import { AdopteurService } from '../adopteur.service';

@Component({
  selector: 'app-add-adopteur',
  templateUrl: './add-adopteur.component.html',
  styleUrls: ['./add-adopteur.component.scss']
})
export class AddAdopteurComponent implements OnInit{

  newAdopteur: Adopteur = {
    prenom: '',
    nom: '',
    adresse: '',
    telephone: '',
    email: '',
    id: 0
  };

  // Add a property to track whether the form is submitted
  isFormSubmitted = false;

  constructor(private adopteurService: AdopteurService) {}

  ngOnInit(): void {}

  saveAdopteur(): void {
    // Mark the form as submitted
    this.isFormSubmitted = true;

    // Check if the form is valid before submitting
    if (this.isFormValid()) {
      this.adopteurService.createAdopteur(this.newAdopteur).subscribe(
        () => {
          // Optionally: redirect to the list after adding
        },
        (error) => {
          console.error('Error creating personnel:', error);
          // Optionally: handle the error, display a message, etc.
        }
      );
    }
  }

  // Add a method to check if the form is valid
  isFormValid(): boolean {
    return (
      this.newAdopteur.prenom.trim() !== '' &&
      this.newAdopteur.nom.trim() !== '' &&
      this.newAdopteur.adresse.trim() !== '' &&
      this.newAdopteur.telephone.trim() !== '' &&
      this.newAdopteur.email.trim() !== ''
    );
  }
}
