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
export interface Effectif{
id?: number
nbrfilles:string;
nbrgarcons:string;
nbrtotal:string;

  }

  
