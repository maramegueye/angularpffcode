import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enfant } from './enfant.models'; 

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  getAllEnfants() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api/v1/enfants';

  constructor(private http: HttpClient) {}

  getEnfants(): Observable<Enfant[]> {
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

  uploadPhoto(enfantId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/save-photoEnfant/${enfantId}`, formData);
  }
}

