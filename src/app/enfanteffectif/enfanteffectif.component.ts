import { Component, OnInit } from '@angular/core';
import { Enfanteffectif } from '../models';
import { EnfanteffectifService } from '../enfanteffectif.service';

@Component({
  selector: 'enfanteffectif',
  templateUrl: './enfanteffectif.component.html',
  styleUrls: ['./enfanteffectif.component.scss']
})
export class EnfanteffectifComponent implements OnInit {

  enfanteffectif: Enfanteffectif[] = [];
  nouvelEffectif: Enfanteffectif = {
    nbrfilles: '',
    nbrgarcons: '',
    nbrtotal: '',
    entre_enfants: '',
    sotie_enfants: '' // Corrected the property name to 'sortie_enfants'
  };

  constructor(private enfanteffectifService: EnfanteffectifService) {}

  ngOnInit(): void {
    this.loadEnfants();
  }

  loadEnfants(): void {
    this.enfanteffectifService.getEffectifs().subscribe((data: Enfanteffectif[]) => {
      this.enfanteffectif = data;
    });
  }

  deleteEnfant(id: number | undefined): void {
    if (id !== undefined) {
      console.log("Deleting enfant with id:", id);
      this.enfanteffectifService.deleteEnfant(id).subscribe(() => {
        console.log("Enfant deleted successfully");
        this.loadEnfants();
      });
    } else {
      console.error("Invalid id:", id);
    }
  }

  envoyerServeur(): void {  // Changed method name to follow camelCase convention
    this.enfanteffectifService.saveEnfant(this.nouvelEffectif).subscribe(() => {
      this.loadEnfants(); // Reload the data after adding a new enfant
      this.resetForm();
    });
  }

  private resetForm(): void {
    this.nouvelEffectif = {
      nbrfilles: '',
      nbrgarcons: '',
      nbrtotal: '',
      entre_enfants: '',
      sotie_enfants: ''
       // Corrected the property name to 'sortie_enfants'
    };
  }
}
