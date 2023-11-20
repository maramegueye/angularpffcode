// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Personnel } from '../models';
// import { PersonnelService } from '../personnel.service';

// @Component({
//   selector: 'app-update-personnel',
//   templateUrl: './update-personnel.component.html',
//   styleUrls: ['./update-personnel.component.scss']
// })
// export class UpdatePersonnelComponent implements OnInit {
//   updatedPersonnel: Personnel = { id: 0, nom: '', prenom: '', profil: '', telephone: '', adrresse: '' };

//   constructor(
//     private route: ActivatedRoute,
//     private personnelService: PersonnelService
//   ) {}

//   async ngOnInit() {
//     // Récupérez l'ID du personnel à mettre à jour depuis l'URL
//     const personnelId = Number(this.route.snapshot.paramMap.get('id'));

//     // Chargez les détails du personnel à mettre à jour
//     try {
//       const personnel = await this.personnelService.getPersonnelById(personnelId).toPromise();
//       this.updatedPersonnel = personnel;
//     } catch (error) {
//       console.error('Erreur lors du chargement du personnel :', error);
//     }
//   }

//   async updatePersonnel() {
//     try {
//       await this.personnelService.updatePersonnel(this.updatedPersonnel.id, this.updatedPersonnel).toPromise();
//       console.log('Personnel mis à jour avec succès.');
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour du personnel :', error);
//     }
//   }

//   cancelEdit() {
//     // Ajoutez le traitement nécessaire pour annuler la modification
//     console.log('Modification annulée.');
//   }
// }
