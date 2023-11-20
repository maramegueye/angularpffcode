import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Effectif } from './models';

@Injectable({
  providedIn: 'root'
})
export class EffectifService {

  constructor(private _httpClient:HttpClient) { }

  getFormulaires(): Observable<Effectif[]>{
    return this._httpClient.get<Effectif[]>('http://localhost:8080/api/v1/effectifs');
   }

  enregistrerDemande(effectif:Effectif):Observable<Effectif>{
    const url = 'http://localhost:8080/api/v1/effectifs'; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this._httpClient.put<Effectif>(url, effectif, { headers });
 
 }

 
}
