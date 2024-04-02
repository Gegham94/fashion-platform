import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { ISignin } from 'src/app/shared/interfaces/IAuth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'gb-mobile-sign-in',
  templateUrl: './mobile-sign-in.component.html',
  styleUrls: ['./mobile-sign-in.component.scss'],
})
export class MobileSignInComponent {
  @Output('openRecoverPassword') openRecoverPassword: EventEmitter<any> =
    new EventEmitter();
  public isRememberMe: boolean = false;
  public isPasswordVisible: boolean = false;

  public readonly signinForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9_]\\w{7,16}$'),
    ]),
    rememberMe: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  public submitForm() {
    let formData: ISignin;
    if (this.signinForm.valid) {
      formData = {
        ...this.signinForm.value,
      } as ISignin;
      this.authService
        .signIn(formData)
        .pipe(
          switchMap((data) => {
            return data;
          })
        )
        .subscribe();
    } else {
      this.signinForm.markAllAsTouched();
    }
  }

  public closeSignInModal(event: Event) {
    this.openRecoverPassword.emit(event);
  }

  public handleCheckboxChange() {
    this.isRememberMe = !this.isRememberMe;
  }

  public handlePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
