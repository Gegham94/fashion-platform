import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-mobile-contact-us',
  templateUrl: './mobile-contact-us.component.html',
  styleUrl: './mobile-contact-us.component.scss',
})
export class MobileContactUsComponent implements OnInit {
  public isLoading = false;
  public maxCharacterCount: number = 500;
  public characterCount: number = 0;

  public messageForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  public ngOnInit(): void {
    this.isLoading = true;
  }

  public frameLoadEnd(){
    this.isLoading = false
  }

  public get nameControl(): FormControl {
    return this.messageForm.get('name') as FormControl;
  }
  public get surnameControl(): FormControl {
    return this.messageForm.get('surname') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.messageForm.get('email') as FormControl;
  }
  public get phoneControl(): FormControl {
    return this.messageForm.get('phone') as FormControl;
  }
  public get subjectControl(): FormControl {
    return this.messageForm.get('subject') as FormControl;
  }
  public get descriptionControl(): FormControl {
    return this.messageForm.get('description') as FormControl;
  }

  public sendMessage() {}

  public updateCharacterCount(event: any): void {
    this.characterCount = event.target.value.length;
  }
}
