import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/app/shared/password-validation/validation';
import { collapse } from 'src/app/shared/animations/animations';
import {
  ICountry,
  ICity,
  ICurrency,
  IPhoneCode,
  ITypeOfDocument,
} from 'src/app/shared/interfaces/IUserInfo';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ISignup } from 'src/app/shared/interfaces/IAuth';
import { switchMap } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-web-sign-up',
  templateUrl: './web-sign-up.component.html',
  styleUrls: ['./web-sign-up.component.scss'],
  animations: [collapse],
})
export class WebSignUpComponent {
  public stepId: number = 1;
  public countries!: ICountry[];
  public cities!: ICity[];
  public currencies!: ICurrency[];
  public phoneCodes!: IPhoneCode[];
  public typeOfDocuments!: ITypeOfDocument[];

  public readonly firstStepForm = new FormGroup({
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
  });

  public readonly secondStepForm = new FormGroup(
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

  public readonly signupForm = new FormGroup({
    firstStepForm: this.firstStepForm,
    secondStepForm: this.secondStepForm,
  });

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  public getFormValue(event: any) {}
  public getFormStep2Value(event: any) {}

  public ngOnInit(): void {}

  public get userNameControl(): FormControl {
    return this.secondStepForm.get('userName') as FormControl;
  }
  public get genderControl(): FormControl {
    return this.secondStepForm.get('gender') as FormControl;
  }
  public get passwordControl(): FormControl {
    return this.secondStepForm.get('password') as FormControl;
  }
  public get repeatPasswordControl(): FormControl {
    return this.secondStepForm.get('repeatPassword') as FormControl;
  }
  public get referralBonusPromoCodeControl(): FormControl {
    return this.secondStepForm.get('referralBonusPromoCode') as FormControl;
  }

  public set countryControlSetter(newValue: string) {
    this.firstStepForm.get('country')?.setValue(newValue);
  }
  public set cityControlSetter(newValue: string) {
    this.firstStepForm.get('city')?.setValue(newValue);
  }
  public set currencyControlSetter(newValue: string) {
    this.firstStepForm.get('currency')?.setValue(newValue);
  }
  public set phoneCodeControlSetter(newValue: string) {
    this.firstStepForm.get('phoneCode')?.setValue(newValue);
  }
  public set typeOfDocumentControlSetter(newValue: string) {
    this.firstStepForm.get('typeOfDocument')?.setValue(newValue);
  }

  public handleCheckboxChange(checkboxId: string): void {
    const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
    if (checkbox.checked) {
      checkbox.parentElement?.classList.add('checked');
    } else {
      checkbox.parentElement?.classList.remove('checked');
    }
  }

  public selectCountry(data: ICountry): void {
    this.countries.forEach((country) => {
      if (country.value === data.value) {
        country.isSelected = true;
        this.countryControlSetter = country.value;
      } else {
        country.isSelected = false;
      }
    });
  }

  public selectCity(data: ICity): void {
    this.cities.forEach((city) => {
      if (city.value === data.value) {
        city.isSelected = true;
        this.cityControlSetter = city.value;
      } else {
        city.isSelected = false;
      }
    });
  }
  public selectCurrency(data: ICurrency): void {
    this.currencies.forEach((currency) => {
      if (currency.value === data.value) {
        currency.isSelected = true;
        this.currencyControlSetter = currency.value;
      } else {
        currency.isSelected = false;
      }
    });
  }
  public selectPhoneCode(data: IPhoneCode): void {
    this.phoneCodes.forEach((code) => {
      if (code.value === data.value) {
        code.isSelected = true;
        this.phoneCodeControlSetter = code.value;
      } else {
        code.isSelected = false;
      }
    });
  }
  public selectTypeOfDocument(data: ITypeOfDocument): void {
    this.typeOfDocuments.forEach((type) => {
      if (type.value === data.value) {
        type.isSelected = true;
        this.typeOfDocumentControlSetter = type.value;
      } else {
        type.isSelected = false;
      }
    });
  }

  public closeModal() {
    this.modalService.close();
  }

  public apply(): void {}

  public nextStep(): void {
    if (this.firstStepForm.valid) {
      this.stepId++;
      this.secondStepForm.markAsUntouched();
    } else {
      this.firstStepForm.markAllAsTouched();
    }
  }

  public previousStep(): void {
    this.stepId--;
  }

  public captchaResolved(): boolean {
    return true;
  }

  public onCaptchaResolved(event: any): void {
    console.log('reCAPTCHA resolved with response:', event);
  }

  public submitForm(): void {
    let formData: ISignup;
    if (this.signupForm.valid) {
      formData = {
        ...this.firstStepForm.value,
        ...this.secondStepForm.value,
      } as ISignup;
      this.authService
        .signUp(formData)
        .pipe(
          switchMap((data) => {
            this.modalService.close();
            return data;
          })
        )
        .subscribe();
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
