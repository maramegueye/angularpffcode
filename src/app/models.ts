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

export interface Salaire {
    id: number;
    nom: string;
    prenom: string;
    salaire:string;
    profil: string;
    telephone: string;
    adresse: string;
  }

  export interface Adopteur {
    id: number;
    prenom: string;
    nom: string;
    adresse: string;
    telephone: string;
    email:string;
     
  }
  