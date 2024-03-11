import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TYPE_FILTER, GENDER } from 'src/app/shared/constants/filters';
import Validation from 'src/app/shared/password-validation/validation';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-mobile-profile-form-step-2',
  standalone: true,
  imports: [SharedModule, NgStyle],
  templateUrl: './mobile-profile-form-step-2.component.html',
  styleUrl: './mobile-profile-form-step-2.component.scss',
})
export class MobileProfileFormStep2Component {
  @Output('formValue') formValue: EventEmitter<any> = new EventEmitter();
  @Input() inputColor: 'dark' | 'light' = 'light';
  public gender: TYPE_FILTER[] = GENDER;

  public readonly form = new FormGroup(
    {
      userName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9_]\\w{7,15}$'),
      ]),
      repeatPassword: new FormControl('', [Validators.required]),
      referralBonusPromoCode: new FormControl('', [Validators.required]),
      promotionalCommunications: new FormControl(''),
      bonusesAndOffers: new FormControl(''),
      termsAndConditions: new FormControl(''),
    },
    {
      validators: [Validation.match('password', 'repeatPassword')],
    }
  );

  public get userNameControl(): FormControl {
    return this.form.get('userName') as FormControl;
  }
  public get genderControl(): FormControl {
    return this.form.get('gender') as FormControl;
  }
  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }
  public get repeatPasswordControl(): FormControl {
    return this.form.get('repeatPassword') as FormControl;
  }
  public get referralBonusPromoCodeControl(): FormControl {
    return this.form.get('referralBonusPromoCode') as FormControl;
  }

  public emitFormValue() {
    this.formValue.emit(this.form.value);
  }

  public apply(): void {}

  public handleCheckboxChange(checkboxId: string): void {
    const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
    if (checkbox.checked) {
      checkbox.parentElement?.classList.add('checked');
    } else {
      checkbox.parentElement?.classList.remove('checked');
    }
  }

  public captchaResolved(): boolean {
    return true;
  }

  public onCaptchaResolved(event: any): void {
    console.log('reCAPTCHA resolved with response:', event);
  }

  public onSelectGenderFilter(options: any) {
    this.form.get('gender')?.setValue(options);
    this.emitFormValue();
  }

  public onUploadDocument() {
    this.emitFormValue();
  }
}
