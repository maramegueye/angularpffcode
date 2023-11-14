import { Component } from '@angular/core';
import { Effectif } from '../models';
import { EffectifService } from '../effectif.service';
@Component({
  selector: 'effectiltotal',
  templateUrl: './effectiltotal.component.html',
  styleUrls: ['./effectiltotal.component.scss']
})
export class EffectiltotalComponent {

  effectif:Effectif= {
    nbrfilles:"",
    nbrgarcons:"",
    nbrtotal:""
  };
  successMessage:string='';
  errorMessage:string='';
  
  public enregistrer(): void {
    this.__effectifService.enregistrerDemande(this.effectif).subscribe(
      {
        next:(Effectif) => {
          this.successMessage = 'demande enregistre reussi',Effectif;
            alert('demande rendez-vous enregistrée avec succès');
        },
        error: (err)=> {
          this.errorMessage = ' error de demande.';
        }
        
      }
    );
     
  }
  constructor(private __effectifService: EffectifService){}
  
}
