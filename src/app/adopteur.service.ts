import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adopteur } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdopteurService {
  
  private apiUrl = 'http://localhost:8080/api/v1/adopteurs';

  constructor(private http: HttpClient) { }

  getAdopteurs(): Observable<Adopteur[]> {
    return this.http.get<Adopteur[]>(this.apiUrl);
  }

  getAdopteurById(id: number): Observable<Adopteur> {
    return this.http.get<Adopteur>(`${this.apiUrl}/${id}`);
  }

  deleteAdopteur(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  createAdopteur(adopteur: Adopteur): Observable<Adopteur> {
    return this.http.post<Adopteur>(this.apiUrl, adopteur); // Utilisez la méthode post pour la création
  }

  updateAdopteur(id: number, adopteur: Adopteur): Observable<Adopteur> {
    return this.http.put<Adopteur>(`${this.apiUrl}/${id}`, adopteur);
  }
}
