import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Enfant } from '../enfant.models';

@Component({
  selector: 'app-list-enfant',
  templateUrl: './list-enfant.component.html',
  styleUrls: ['./list-enfant.component.scss']
})
export class ListEnfantComponent implements OnInit {
    enfants: Enfant[] = [];
    nom!: string;
    prenom!: string;
    age!: number;
    date_naissance!: Date;
    photo!: ByteLengthQueuingStrategy;

      constructor(private enfantService: EnfantService) {}

      ngOnInit(): void {
        this.loadEnfants();
      }

    loadEnfants(): void {
      this.enfantService.getEnfants().subscribe((data: Enfant[]) => {
        this.enfants = data;
      });
    }

    deleteEnfant(id: number): void {
      this.enfantService.deleteEnfant(id).subscribe(() => {
        this.loadEnfants();
      });
    }

    saveEnfant(): void {
      const nouvelEnfant: Enfant = {
        nom: this.nom,
        prenom: this.prenom,
        age: this.age,
        date_naissance: this.date_naissance,
        photo: this.photo
      };

      this.enfantService.saveEnfant(nouvelEnfant).subscribe(() => {
        this.loadEnfants();
        this.resetForm();
      });
  }

    uploadPhoto(event: any): void {
      this.uploadPhoto = event.target.files[0];
    }

      private resetForm(): void {
        this.nom = '';
        this.prenom = '';
        this.age = null!;
        this.photo = null!;
      }
}
