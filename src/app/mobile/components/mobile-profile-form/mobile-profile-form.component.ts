import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TYPE_FILTER, COUNTRY, CITY, CURRENCY, PHONE_CODE, TYPE_OF_DOCUMENT } from 'src/app/shared/constants/filters';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-mobile-profile-form',
  standalone: true,
  imports: [SharedModule, NgStyle],
  templateUrl: './mobile-profile-form.component.html',
  styleUrl: './mobile-profile-form.component.scss',
})
export class MobileProfileFormComponent {
  @Output('formValue') formValue: EventEmitter<any> = new EventEmitter();
  @Input() inputColor: 'dark' | 'light' = 'light';
  public country: TYPE_FILTER[] = COUNTRY;
  public city: TYPE_FILTER[] = CITY;
  public currency: TYPE_FILTER[] = CURRENCY;
  public phoneCode: TYPE_FILTER[] = PHONE_CODE;
  public typeOfDocument: TYPE_FILTER[] = TYPE_OF_DOCUMENT;

  public readonly form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    optional: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'),
    ]),
    dateOfBirth: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    phoneCode: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    typeOfDocument: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required]),
    uploadedDocument: new FormControl([], [Validators.required]),
  });

  public get firstNameControl(): FormControl {
    return this.form.get('firstName') as FormControl;
  }
  public get optionalControl(): FormControl {
    return this.form.get('optional') as FormControl;
  }
  public get lastNameControl(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }
  public get dateOfBirthControl(): FormControl {
    return this.form.get('dateOfBirth') as FormControl;
  }
  public get countryControl(): FormControl {
    return this.form.get('country') as FormControl;
  }
  public get cityControl(): FormControl {
    return this.form.get('city') as FormControl;
  }
  public get zipCodeControl(): FormControl {
    return this.form.get('zipCode') as FormControl;
  }
  public get currencyControl(): FormControl {
    return this.form.get('currency') as FormControl;
  }
  public get phoneCodeControl(): FormControl {
    return this.form.get('phoneCode') as FormControl;
  }
  public get phoneNumberControl(): FormControl {
    return this.form.get('phoneNumber') as FormControl;
  }
  public get typeOfDocControl(): FormControl {
    return this.form.get('typeOfDocument') as FormControl;
  }
  public get docNumberControl(): FormControl {
    return this.form.get('documentNumber') as FormControl;
  }

  public emitFormValue() {
    this.formValue.emit(this.form.value);
  }

  public onSelectCountryFilter(options: any) {
    this.form.get('country')?.setValue(options);
    this.emitFormValue();
  }

  public onSelectCityFilter(options: any) {
    this.form.get('city')?.setValue(options);
    this.emitFormValue();
  }

  public onSelectCurrencyFilter(options: any) {
    this.form.get('currency')?.setValue(options);
    this.emitFormValue();
  }

  public onSelectPhoneCodeFilter(options: any) {
    this.form.get('phoneCode')?.setValue(options);
    this.emitFormValue();
  }

  public onSelectTypeOfDocumentFilter(options: any) {
    this.form.get('typeOfDocument')?.setValue(options);
    this.emitFormValue();
  }

  public onUploadDocument() {
    this.emitFormValue();
  }
}
