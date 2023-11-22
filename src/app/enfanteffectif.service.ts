import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // Import 'of' from 'rxjs'
import { Enfanteffectif } from './models';

@Injectable({
  providedIn: 'root'
})
export class EnfanteffectifService {

  private baseUrl = 'http://localhost:8080/api/v1/effectifs';

  private effectifs: Enfanteffectif[] = [];

  constructor(private _httpClient: HttpClient) {}  // Inject HttpClient in the constructor 

  getEffectifs(): Observable<Enfanteffectif[]> {
    return of(this.effectifs);
  }

  addEffectif(effectif: Enfanteffectif): Observable<void> {
    this.effectifs.push(effectif);
    return of(undefined);  // Return an Observable of undefined
  }

  deleteEnfant(id: number): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/${id}`);
  }

  saveEnfant(enfant: Enfanteffectif): Observable<Enfanteffectif> {
    return this._httpClient.put<Enfanteffectif>(this.baseUrl, enfant);  // Use 'post' instead of 'put' for adding a new item
  }

  // uploadPhoto(enfantId: number, file: File): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //
  //   return this._httpClient.put(`${this.baseUrl}/save-photoEnfant/${enfantId}`, formData);
  // }

  // searchProperties(filters: any): Observable<Enfanteffectif[]> {
  //   const params = new HttpParams({ fromObject: filters });
  //   return this._httpClient.get<Enfanteffectif[]>(`${this.baseUrl}/search`, { params });
  // }

}
