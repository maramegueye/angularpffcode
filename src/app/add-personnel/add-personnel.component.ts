import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../personnel.service';
import { Personnel } from '../models';

@Component({
  selector: 'add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent implements OnInit {
  newPersonnel: Personnel = {
    nom: '',
    prenom: '',
    profil: '',
    telephone: '',
    adresse: '',
    id: 0
  };

  // Add a property to track whether the form is submitted
  isFormSubmitted = false;

  constructor(private personnelService: PersonnelService) {}

  ngOnInit(): void {}

  savePersonnel(): void {
    // Mark the form as submitted
    this.isFormSubmitted = true;

    // Check if the form is valid before submitting
    if (this.isFormValid()) {
      this.personnelService.createPersonnel(this.newPersonnel).subscribe(
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
      this.newPersonnel.nom.trim() !== '' &&
      this.newPersonnel.prenom.trim() !== '' &&
      this.newPersonnel.profil.trim() !== '' &&
      this.newPersonnel.telephone.trim() !== '' &&
      this.newPersonnel.adresse.trim() !== ''
    );
  }
}
