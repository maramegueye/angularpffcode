import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enfant } from './models';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private baseUrl = 'http://localhost:8080/api/v1/enfants';

  constructor(private http: HttpClient) {}

  getAllEnfants(): Observable<Enfant[]> {
    return this.http.get<Enfant[]>(this.baseUrl);
  }

  getEnfantById(id: number): Observable<Enfant> {
    return this.http.get<Enfant>(`${this.baseUrl}/${id}`);
  }

  deleteEnfant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  saveEnfant(enfant: Enfant): Observable<Enfant> {
    return this.http.post<Enfant>(this.baseUrl, enfant);
  }
}
