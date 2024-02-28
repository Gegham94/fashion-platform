import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry, ICity, IUserInfo, IUserAmountInfo } from '../interfaces/IUserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  // AUTHENTICATE FORM INFORMATION
  public getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>('assets/mock-data/country.json');
  }
  public getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>('assets/mock-data/city.json');
  }
  public getCurrencies(): Observable<ICity[]> {
    return this.http.get<ICity[]>('assets/mock-data/currency.json');
  }
  public getPhoneCodes(): Observable<ICity[]> {
    return this.http.get<ICity[]>('assets/mock-data/phone-code.json');
  }
  public getTypeOfDocuments(): Observable<ICity[]> {
    return this.http.get<ICity[]>('assets/mock-data/type-of-document.json');
  }

  // USER PROFILE INFORMATION
  public getUserInfo(): Observable<IUserInfo> {
    return this.http.get<IUserInfo>('assets/mock-data/user-info.json');
  }
}
