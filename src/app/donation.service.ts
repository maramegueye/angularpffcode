import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from './models';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  apiUrl: any;

  constructor(private _httpClient: HttpClient) { }

  getDonations(): Observable<Donation[]> {
    // Assurez-vous de spécifier l'URL correcte pour récupérer les données
    const apiUrl = 'http://localhost:8080/api/v1/dons'; // Remplacez cela par votre URL réelle
    return this._httpClient.get<Donation[]>(apiUrl);
  }

  enregistrerDemande(donation:Donation):Observable<Donation>{
    const url = 'http://localhost:8080/api/v1/dons'; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this._httpClient.put<Donation>(url, donation, { headers });
 
 }
 enregistrerDonationAvecMethode(donation: Donation, methode: string): Observable<any> {
  // Ajoutez ici la logique d'appel à votre API avec la méthode de paiement spécifique
  const url = `${this.apiUrl}/donation/${methode}`;
  return this._httpClient.post(url, donation);
}
}
