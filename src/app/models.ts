export interface DemandeAdoption{
    id?: number,
    titre: string,
    prenom: string,
    nom: string,
    email: string,
    telephone: string,
    dateDemande?: Date,
    message: string
}
export interface Donation {
    id?: number
    nomcomplet: string;
    email: string;
    telephone: string;
    montant: string;
    operation?: string;
    reference?: string;
  }
export interface Enfanteffectif{
id?: number
nbrfilles:string;
nbrgarcons:string;
nbrtotal:string;
entre_enfants:string;
sotie_enfants:string;

  }
  
  // models/personnel.model.ts

export interface Personnel {
  id: number;
  nom: string;
  prenom: string;
  profil: string;
  telephone: string;
  adresse: string;
  salaire: string;
}

  export interface Admin{
    id: number,
    prenom: string,
    nom: string,
    email: string
  }

  export interface UserDetail{
    token: string,
    dateCreation: Date,
    validate: Date,
    admin:Admin
}
// models.ts
export interface Enfant {
  id?: number; // Assuming id is optional or will be assigned on the server
  prenom: string;
  nom: string;
  datenaissance?: Date; // Assuming date of birth is optional or will be assigned on the server
  photo?: number[]; // Assuming photo is optional or will be assigned on the server
}

export interface Adopteur{
id?: number,
prenom: string,
nom: string,
adresse: string,
telephone: string,
email: string
}




