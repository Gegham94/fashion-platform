import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser && currentUser.api_token) {
      let lang = localStorage.getItem('lang');
      switch (lang) {
        case 'en':
          lang = '1';
          break;
        case 'am':
          lang = '2';
          break;
        case 'br':
          lang = '3';
          break;
        case 'ca':
          lang = '4';
          break;
        default:
          lang = '1';
      }
      httpRequest = httpRequest.clone({
        headers: httpRequest.headers
          .set('Access-Control-Allow-Credentials', 'true')
          .set('X-Language', lang)
          .set('Authorization', `Bearer ${currentUser.api_token}`),
      });
    }

    return next.handle(httpRequest).pipe(
      tap((res: any) => {
        if (res?.body?.success === false) {
          this.authService.updateCurrentUserValue(null);
          return;
        }
      })
    );
  }
}
