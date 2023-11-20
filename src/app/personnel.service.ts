import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from './models';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private apiUrl = 'http://localhost:8080/api/v1/personnels';

  constructor(private http: HttpClient) { }

  getPersonnels(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(this.apiUrl);
  }

  getPersonnelById(id: number): Observable<Personnel> {
    return this.http.get<Personnel>(`${this.apiUrl}/${id}`); // Utilisation des backticks (`) et non (${})
  }

  deletePersonnel(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`); // Utilisation des backticks (`) et non (${})
  }

  createPersonnel(personnel: Personnel): Observable<Personnel> {
    return this.http.post<Personnel>(this.apiUrl, personnel);
  }

  updatePersonnel(id: number, personnel: Personnel): Observable<Personnel> {
    return this.http.put<Personnel>(`${this.apiUrl}/${id}`, personnel); // Utilisation des backticks (`) et non (${})
  }
}
