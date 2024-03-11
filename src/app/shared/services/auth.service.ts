import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ISignin, ISignup } from '../interfaces/IAuth';
import { IUserInfo } from '../interfaces/IUserInfo';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser!: IUserInfo;

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private readonly userService: UserService
  ) {
    this.userService.setCurrentUser = JSON.parse(
      localStorage.getItem('currentUser') as string
    );
    this.userService.getCurrentUserObservable.subscribe((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
  }

  public updateCurrentUserValue(value: IUserInfo | null): void {
    this.userService.setCurrentUser = value;
  }

  public signIn(signinForm: ISignin): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signin`, signinForm).pipe(
      map((response: any) => {
        if (response && response.success === true) {
          this.userService.setCurrentUser = response.data;
          localStorage.setItem('currentUser', JSON.stringify(response.data));
          return response;
        } else {
          return {
            success: false,
            data: null,
          };
        }
      })
    );
  }

  signOut() {
    return this.http.post<any>(`${this.API_URL}/signout`, {}).pipe(
      map((response: any) => {
        if (response && response.success === true) {
          localStorage.removeItem('currentUser');
          this.userService.setCurrentUser = null;
        }
        return response;
      })
    );
  }

  public signUp(signUp: ISignup): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signup`, signUp);
  }
}
