import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeAdoption } from './models';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormulaireDemandeService {

  constructor(private  _httpClient:HttpClient) {}

  getFormulaires(): Observable<DemandeAdoption[]>{
    return this._httpClient.get<DemandeAdoption[]>('http://localhost:8080/api/v1/demandes');
   }

    enregistrerDemande(demandeAdoption:DemandeAdoption):Observable<DemandeAdoption>{
      const url = 'http://localhost:8080/api/v1/demandes'; 
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._httpClient.put<DemandeAdoption>(url, demandeAdoption, { headers });
   
   }
}
