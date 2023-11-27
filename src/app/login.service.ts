import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetail } from './models';
import { Observable } from 'rxjs';
import { API_LOGIN_URL } from './isep-config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private __httpClient: HttpClient) {}

  login(email: string, password: string): Observable<UserDetail> {
    let data = `{"email":"${email}", "password":"${password}"}`; // corrected the spelling of 'email'
    console.log("connexion de ");
    console.log(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.__httpClient.put<UserDetail>(API_LOGIN_URL, data, { headers });
  }

  logout(): void {
    // Implement the logout logic here
    // For example, you can clear any stored tokens or user information
    // This is a placeholder, replace it with your actual logout logic
    console.log("Déconnexion réussie");
  }
}
