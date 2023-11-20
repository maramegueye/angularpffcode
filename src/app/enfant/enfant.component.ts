// enfant.component.ts
import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Enfant } from '../models';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  enfants: Enfant[] = [];
   file : File| undefined;
  nouvelEnfant: Enfant = {
    prenom: '',
    nom: '',
    datenaissance: new Date() // Initialize with the default date or set it as needed
  };
  datenaissanceModel: string = '';

  constructor(private enfantService: EnfantService) {}

  ngOnInit(): void {
    this.loadEnfants();
  }

  loadEnfants(): void {
    this.enfantService.getAllEnfants().subscribe((data: Enfant[]) => {
      this.enfants = data;
    });
  }

  // Method to handle date conversion
  onDateNaissanceChange(event: any): void {
    // Assuming event.target.value is a valid date string
    this.nouvelEnfant.datenaissance = new Date(event.target.value);
  }

  deleteEnfant(id: number): void {
    this.enfantService.deleteEnfant(id).subscribe(() => {
      this.loadEnfants();
    });
  }

  saveEnfant(): void {
    if(this.file){
      const reader = new FileReader();
      reader.onload = (event) => {
        const resultArrayBuffer = event.target?.result as ArrayBuffer;
        const uint8Array = new Uint8Array(resultArrayBuffer);
        this.nouvelEnfant.photo= Array.from(uint8Array);
        this.envoyerserveur();
      };
      reader.readAsArrayBuffer(this.file);
    }
    else{
      this.envoyerserveur();
    } 
  }

  envoyerserveur(){
    this.enfantService.saveEnfant(this.nouvelEnfant).subscribe(() => {
      this.loadEnfants();
      this.resetForm();
    });

  }

  uploadPhoto(event: any): void {
   this.file = event.target.files[0];
  }


  private resetForm(): void {
    this.nouvelEnfant = { prenom: '', nom: '', datenaissance: new Date() };
  }
}
