import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { ISignin } from 'src/app/shared/interfaces/IAuth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-mobile-sign-in',
  templateUrl: './mobile-sign-in.component.html',
  styleUrls: ['./mobile-sign-in.component.scss'],
})
export class MobileSignInComponent {
  public isRememberMe: boolean = false;

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

  constructor(private authService: AuthService, private modalService: ModalService) {}

  public ngOnInit(): void {}

  public get emailControl(): FormControl {
    return this.signinForm.get('email') as FormControl;
  }
  public get passwordControl(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }

  public handleCheckboxChange() {
    this.isRememberMe = !this.isRememberMe;
  }

  public forgotPassword() {}

  public submitForm() {
    let formData: ISignin;
    if (this.signinForm.valid) {
      formData = {
        ...this.signinForm.value,
      } as ISignin;
      this.authService.signIn(formData)
      .pipe(
        switchMap((data) => {
          this.modalService.close();
          return data;
        })
      ).subscribe();
    } else {
      this.signinForm.markAllAsTouched();
    }
  }
}
