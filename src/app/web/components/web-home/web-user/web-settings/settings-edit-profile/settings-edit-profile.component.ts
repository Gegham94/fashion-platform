import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TYPE_FILTER, COUNTRY, CITY, CURRENCY, PHONE_CODE, TYPE_OF_DOCUMENT } from 'src/app/shared/constants/filters';

@Component({
  selector: 'gb-settings-edit-profile',
  templateUrl: './settings-edit-profile.component.html',
  styleUrl: './settings-edit-profile.component.scss',
})
export class SettingsEditProfileComponent implements OnInit {

  public isLoading = false;

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

  constructor() {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public onSelectValue(controlName: string, options: any){
    this.form.get(`${controlName}`)?.setValue(options);
  }

  public onUploadDocument() {
  }

  public onSaveChange() {}

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
