import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enfant } from './models';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private baseUrl = 'http://localhost:8080/api/v1/enfants';

  constructor(private __http: HttpClient) {}

  getAllEnfants(): Observable<Enfant[]> {
    return this.__http.get<Enfant[]>(this.baseUrl);
  }

  getEnfantById(id: number): Observable<Enfant> {
    return this.__http.get<Enfant>(`${this.baseUrl}/${id}`);
  }

  deleteEnfant(id: number): Observable<any> {
    return this.__http.delete(`${this.baseUrl}/${id}`);
  }

  saveEnfant(enfant: Enfant): Observable<Enfant> {
    return this.__http.put<Enfant>(this.baseUrl, enfant);
  }

  uploadPhoto(enfantId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.__http.put(`${this.baseUrl}/save-photoEnfant/${enfantId}`, formData);
  }
}
