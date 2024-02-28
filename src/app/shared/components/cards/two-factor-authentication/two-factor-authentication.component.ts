import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.component.html',
  styleUrl: './two-factor-authentication.component.scss',
})
export class TwoFactorAuthenticationComponent {
  public readonly twoFactorAuthForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });

  public submitForm() {
    console.log(this.twoFactorAuthForm.value);
  }
}
