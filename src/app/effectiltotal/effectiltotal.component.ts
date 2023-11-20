import { Component } from '@angular/core';
import { Effectif } from '../models';
import { EffectifService } from '../effectif.service';

@Component({
  selector: 'effectiltotal',
  templateUrl: './effectiltotal.component.html',
  styleUrls: ['./effectiltotal.component.scss']
})
export class EffectiltotalComponent {

  effectif: Effectif = {
    nbrfilles: "",
    nbrgarcons: "",
    nbrtotal: "",
    entre_enfants: "",
    sotie_enfants: "",
  };
  successMessage: string = '';
  errorMessage: string = '';

  public enregistrer(): void {
    this.__effectifService.enregistrerDemande(this.effectif).subscribe(
      {
        next: (Effectif) => {
          this.successMessage = 'Demande enregistrée avec succès';
          alert('Demande enregistrée avec succès');
        },
        error: (err) => {
          this.errorMessage = 'Erreur de demande.';
        }
      }
    );
  }

  constructor(private __effectifService: EffectifService) { }
}
