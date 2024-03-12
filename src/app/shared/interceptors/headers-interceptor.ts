import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = getLang();

  if (currentUser && currentUser.api_token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.api_token}`,
        'Access-Control-Allow-Credentials': 'true',
        'X-Language': lang,
      },
    });
  }
  return next(req).pipe(
    tap((res: any) => {
      if (res?.body?.success === false) {
        authService.updateCurrentUserValue(null);
        return;
      }
    })
  );
};

// GET LANGUAGE
function getLang() {
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
  return lang;
}
