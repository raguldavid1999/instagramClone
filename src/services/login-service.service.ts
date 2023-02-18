import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  register(payload:any){
    return this.http.post<any>('http://127.0.0.1:8000/insta/register',payload)
  }
  signUp(payload:any){
    return this.http.post<any>('http://127.0.0.1:8000/insta/signup',payload)
  }

}
