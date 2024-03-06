import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { ISignin } from 'src/app/shared/interfaces/IAuth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-web-sign-in',
  templateUrl: './web-sign-in.component.html',
  styleUrls: ['./web-sign-in.component.scss'],
})
export class WebSignInComponent {
  @Output('openRecoverPassword') openRecoverPassword: EventEmitter<any> = new EventEmitter();
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
      Validators.pattern('^[A-Za-z0-9_]\\w{7,15}$'),
    ]),
    rememberMe: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  public get emailControl(): FormControl {
    return this.signinForm.get('email') as FormControl;
  }
  public get passwordControl(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }

  public closeSignInModal(event: Event){
    this.openRecoverPassword.emit(event);
  }

  public handleCheckboxChange() {
    this.isRememberMe = !this.isRememberMe;
  }

  public handlePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

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
}
