// personnel.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from '../models';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

  editingPersonnel: boolean = false;
  updatedPersonnel: Personnel = { id: 0, nom: '', prenom: '', profil: '', telephone: '', adresse: '',  salaire: '' };

  newPersonnel: Personnel = {
    id: 0,
    nom: '',
    prenom: '',
    profil: '',
    telephone: '',
    adresse: '',
    salaire: ''
  };

  personnels$: Observable<Personnel[]> | undefined;

  constructor(private personnelService: PersonnelService) {}

  ngOnInit() {
    this.loadPersonnels();
  }

  addPersonnel() {
    this.personnelService.createPersonnel(this.newPersonnel).subscribe(() => {
      this.loadPersonnels();
      this.newPersonnel = {
        id: 0,
        nom: '',
        prenom: '',
        profil: '',
        telephone: '',
        adresse: '',
        salaire: ''
      };
    });
  }

  deletePersonnel(id: number | undefined) {
    if (id !== undefined) {
      this.personnelService.deletePersonnel(id).subscribe(
        () => {
          console.log(`Personnel with ID ${id} deleted successfully.`);
          this.loadPersonnels();
        },
        (error) => {
          console.error('Error deleting personnel:', error);
        }
      );
    } else {
      console.error('ID is undefined');
    }
  }

  editPersonnel(personnel: Personnel) {
    this.editingPersonnel = true;
    this.updatedPersonnel = { ...personnel };
  }

  updatePersonnel() {
    if (this.updatedPersonnel && this.updatedPersonnel.id !== undefined) {
      this.personnelService.updatePersonnel(this.updatedPersonnel.id, this.updatedPersonnel).subscribe(() => {
        this.loadPersonnels();
        this.cancelEdit();
      });
    } else {
      console.error('Updated personnel or ID is undefined');
    }
  }


  cancelEdit() {
    this.editingPersonnel = false;
    this.updatedPersonnel = { id: 0, nom: '', prenom: '', profil: '', telephone: '', adresse: '',  salaire: '' };
  }

  private loadPersonnels() {
    this.personnels$ = this.personnelService.getPersonnels();
  }
}
