
// import { Component, OnInit } from '@angular/core';
//  import { ActivatedRoute } from '@angular/router';
//  import { Adopteur } from '../models';
// import { AdopteurService } from '../adopteur.service'; 

// @Component({
//   selector: 'app-update-adopteur',
//   templateUrl: './update-adopteur.component.html',
//   styleUrls: ['./update-adopteur.component.scss']
// })
// export class UpdateAdopteurComponent  implements OnInit{

//   updatedAdopteur: Adopteur = { id: 0,prenom: '', nom: '',  adresse: '', telephone: '',email: '' };

//   constructor(
//     private route: ActivatedRoute,
//     private adopteurService: AdopteurService
//   ) {}

//   async ngOnInit() {
//     // Récupérez l'ID du adopteur à mettre à jour depuis l'URL
//     const adopteurId = Number(this.route.snapshot.paramMap.get('id'));

//     // Chargez les détails du adopteur à mettre à jour
//     try {
//             const adopteur = await this.adopteurService.getAdopteurById(adopteurId).toPromise();
//             this.updatedAdopteur = adopteur;
//           } catch (error) {
//             console.error('Erreur lors du chargement du adopteur :', error);
//           }
//   }

//   async updateAdopteur() {
//     try {
//       await this.adopteurService.updateAdopteur(this.updatedAdopteur.id, this.updatedAdopteur).toPromise();
//       console.log('Adopteur mis à jour avec succès.');
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour du adopteur :', error);
//     }
//   }

//   cancelEdit() {
//     // Ajoutez le traitement nécessaire pour annuler la modification
//     console.log('Modification annulée.');
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adopteur } from '../models';
import { AdopteurService } from '../adopteur.service'; 

@Component({
  selector: 'app-update-adopteur',
  templateUrl: './update-adopteur.component.html',
  styleUrls: ['./update-adopteur.component.scss']
})
export class UpdateAdopteurComponent implements OnInit {
  updatedAdopteur: Adopteur = { id: 0, prenom: '', nom: '', adresse: '', telephone: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private adopteurService: AdopteurService
  ) {}

  ngOnInit(): void {
    const adopteurId = Number(this.route.snapshot.paramMap.get('id'));

    try {
      this.adopteurService.getAdopteurById(adopteurId).subscribe((adopteur) => {
        this.updatedAdopteur = adopteur;
      });
    } catch (error) {
      console.error('Erreur lors du chargement du adopteur :', error);
    }
  }

  async updateAdopteur() {
    try {
      await this.adopteurService.updateAdopteur(this.updatedAdopteur.id, this.updatedAdopteur).toPromise();
      console.log('Adopteur mis à jour avec succès.');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du adopteur :', error);
    }
  }

  cancelEdit() {
    console.log('Modification annulée.');
  }
}

