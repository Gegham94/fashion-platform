import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { collapse } from 'src/app/shared/animations/animations';
import {
  CITY,
  COUNTRY,
  CURRENCY,
  GENDER,
  PHONE_CODE,
  TYPE_FILTER,
  TYPE_OF_DOCUMENT,
} from 'src/app/shared/constants/filters';
import { ISignup } from 'src/app/shared/interfaces/IAuth';
import Validation from 'src/app/shared/password-validation/validation';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'gb-web-sign-up',
  templateUrl: './web-sign-up.component.html',
  styleUrls: ['./web-sign-up.component.scss'],
  animations: [collapse],
})
export class WebSignUpComponent implements OnDestroy {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  @Output('openRegistrationDone') openRegistrationDone: EventEmitter<any> =
    new EventEmitter();

  private modalElement: any;
  public stepId: number = 1;
  public markMultiselectsTouched: boolean = false;

  public country: TYPE_FILTER[] = COUNTRY;
  public city: TYPE_FILTER[] = CITY;
  public currency: TYPE_FILTER[] = CURRENCY;
  public phoneCode: TYPE_FILTER[] = PHONE_CODE;
  public typeOfDocument: TYPE_FILTER[] = TYPE_OF_DOCUMENT;
  public gender: TYPE_FILTER[] = GENDER;

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
    uploadedDocument: new FormControl([], [Validators.required]),
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
    private viewContainerRef: ViewContainerRef
  ) {}

  public ngOnDestroy(): void {
    this.destroyRegistrationDoneModal();
  }

  public signUp(): void {
    let formData: ISignup;
    if (this.secondStepForm && this.secondStepForm.valid) {
      if (this.signupForm.valid) {
        formData = {
          ...this.firstStepForm.value,
          ...this.secondStepForm.value,
        } as ISignup;
        this.authService
          .signUp(formData)
          .pipe(
            switchMap((data) => {
              this.openRegistrationDoneModal();
              return data;
            })
          )
          .subscribe();
      }
    } else {
      this.secondStepForm.markAllAsTouched();
      this.markMultiselectsTouched = true;
    }
  }

  public onSelectValue(controlName: string, options: any) {
    this.firstStepForm.get(`${controlName}`)?.setValue(options);
  }

  public nextStep(): void {
    if (this.firstStepForm && this.firstStepForm.valid) {
      this.stepId++;
      this.secondStepForm.markAsUntouched();
    } else {
      this.firstStepForm.markAllAsTouched();
      this.markMultiselectsTouched = true;
    }
  }

  public previousStep(): void {
    this.stepId--;
  }

  public apply(): void {}

  public onUploadDocument() {}

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

  //REGISTRATION DONE MODAL
  public destroyRegistrationDoneModal() {
    if (document.body.contains(this.modalElement?.rootNodes?.[0])) {
      document.body.removeChild(this.modalElement.rootNodes[0]);
    }
  }

  public closeRegistrationDoneModal() {
    this.destroyRegistrationDoneModal();
  }

  public openRegistrationDoneModal() {
    this.openRegistrationDone.emit(true);
    this.createRegistrationDoneModal();
  }

  public createRegistrationDoneModal() {
    this.modalElement = this.viewContainerRef.createEmbeddedView(
      this.modalTemplate
    );
    document.body.appendChild(this.modalElement.rootNodes[0]);
    const popup = this.modalElement.rootNodes[0];
    popup.style.setProperty('position', 'fixed');
    popup.style.setProperty('top', '0px');
    popup.style.setProperty('left', '0px');
    popup.style.setProperty('height', '100%');
    popup.style.setProperty('width', '100%');
  }
}
