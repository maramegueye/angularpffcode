import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { UserDetail } from './models';
 import { Observable } from 'rxjs';
 import { API_LOGIN_URL } from './isep-config';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private __httpClient : HttpClient) {

  }

  login(email:string,password:string):Observable<UserDetail>{
   let data = "{\"emil\":\""+email+"\", \"password\":\""+password+"\"}";
   console.log("connexion de ");
   console.log(data);
   let headers = new HttpHeaders({
     'Content-Type':'application/json',
     'Accept':'application/json'
   });
    return this.__httpClient.put<UserDetail>( API_LOGIN_URL,data,{headers});

  }
}
