import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISignin, ISignup } from '../interfaces/IAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signIn(signinForm: ISignin): Observable<any> {
    const fullUrl = `/signin-api-url`;
    return this.http.post<any>(fullUrl, signinForm );
  }

  public signUp(signUp: ISignup): Observable<any> {
    const fullUrl = `/signup-api-url`;
    return this.http.post<any>(fullUrl, signUp);
  }
}
