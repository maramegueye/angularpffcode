import { Component, OnInit } from '@angular/core';
import { Adopteur } from '../models';
import { Observable } from 'rxjs';
import { AdopteurService } from '../adopteur.service';

@Component({
  selector: 'adopteur',
  templateUrl: './adopteur.component.html',
  styleUrls: ['./adopteur.component.scss']
})
export class AdopteurComponent implements OnInit {
  editingAdopteur = false;
  updatedAdopteur: Adopteur = { id: 0, prenom: '', nom: '', adresse: '', telephone: '', email: '' };
  newAdopteur: Adopteur = { id: 0, prenom: '', nom: '', adresse: '', telephone: '', email: '' };
  adopteurs$: Observable<Adopteur[]> | undefined;

  constructor(private adopteurService: AdopteurService) {}

  ngOnInit() {
    this.loadAdopteurs();
  }

  addAdopteur() {
    this.adopteurService.createAdopteur(this.newAdopteur).subscribe(
      () => {
        this.loadAdopteurs();
        this.newAdopteur = { id: 0, prenom: '', nom: '', adresse: '', telephone: '', email: '' };
      },
      (error) => {
        console.error('Error adding adopteur:', error);
        // Ajoutez ici la logique pour gérer l'erreur, par exemple, afficher un message à l'utilisateur.
      }
    );
  }
  
  deleteAdopteur(id: number | undefined) {
    if (id !== undefined) {
      this.adopteurService.deleteAdopteur(id).subscribe(
        () => {
          console.log(`Adopteur with ID ${id} deleted successfully.`);
          this.loadAdopteurs();
        },
        (error) => {
          console.error('Error deleting Adopteur:', error);
        }
      );
    } else {
      console.error('ID is undefined');
    }
  }

  editAdopteur(adopteur: Adopteur) {
    this.editingAdopteur = true;
    this.updatedAdopteur = { ...adopteur };
  }

  updateAdopteur() {
    if (this.updatedAdopteur && this.updatedAdopteur.id !== undefined) {
      this.adopteurService.updateAdopteur(this.updatedAdopteur.id, this.updatedAdopteur).subscribe(() => {
        this.loadAdopteurs();
        this.cancelEdit();
      });
    } else {
      console.error('Updated Adopteur or ID is undefined');
    }
  }

  cancelEdit() {
    this.editingAdopteur = false;
    this.updatedAdopteur = { id: 0, prenom: '', nom: '', adresse: '', telephone: '', email: '' };
  }

  private loadAdopteurs() {
    this.adopteurs$ = this.adopteurService.getAdopteurs();
  }
}
