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
