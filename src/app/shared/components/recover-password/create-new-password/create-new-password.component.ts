import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.scss'
})
export class CreateNewPasswordComponent {
  @Output('closeRecoverPassword') closeRecoverPassword: EventEmitter<any> = new EventEmitter();
  @Input('isMobile') isMobile: boolean = false;
  public isPasswordVisible: boolean = false;
  public isRepeatPasswordVisible: boolean = false;

  public readonly newPasswordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9_]\\w{7,15}$'),
    ]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  public get passwordControl(): FormControl {
    return this.newPasswordForm.get('password') as FormControl;
  }
  public get repeatPasswordControl(): FormControl {
    return this.newPasswordForm.get('repeatPassword') as FormControl;
  }

  public submitForm() {
    this.closeRecoverPassword.emit(true);
  }

  public handlePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public handleRepeatPasswordVisibility() {
    this.isRepeatPasswordVisible = !this.isRepeatPasswordVisible;
  }

}
