import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserInfo } from '../interfaces/IUserInfo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly currentUser$: BehaviorSubject<IUserInfo | null> =
    new BehaviorSubject<IUserInfo | null>(null);

  // Current User
  public set setCurrentUser(user: IUserInfo | null) {
    this.currentUser$.next(user);
  }

  public get getCurrentUserObservable(): Observable<IUserInfo | null> {
    return this.currentUser$.asObservable();
  }
}
