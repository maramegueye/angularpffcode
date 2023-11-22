// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Effectif } from './models';

// @Injectable({
//   providedIn: 'root'
// })
// export class EffectifService {
//   private baseUrl = 'http://localhost:8080/api/v1/effectifs'

//   constructor(private _httpClient:HttpClient) { }
//   getAllEnfants(): Observable<Effectif[]> {
//     return this._httpClient.get<Effectif[]>(this.baseUrl);
//   }

//   getEnfantById(id: number): Observable<Effectif> {
//     return this._httpClient.get<Effectif>(`${this.baseUrl}/${id}`);
//   }

//   deleteEnfant(id: number): Observable<any> {
//     return this._httpClient.delete(`${this.baseUrl}/${id}`);
//   }

//   saveEnfant(enfant: Effectif): Observable<Effectif> {
//     return this._httpClient.put<Effectif>(this.baseUrl, enfant);
//   }

//   uploadPhoto(enfantId: number, file: File): Observable<any> {
//     const formData: FormData = new FormData();
//     formData.append('file', file);

//     return this._httpClient.put(`${this.baseUrl}/save-photoEnfant/${enfantId}`, formData);
//   }

//   searchProperties(filters: any): Observable<Effectif[]> {
//     const params = new HttpParams({ fromObject: filters });
//     return this._httpClient.get<Effectif[]>(`${this.baseUrl}/search`, { params });
//   }
 
// }
