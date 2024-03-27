import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-time-out',
  templateUrl: './time-out.component.html',
  styleUrl: './time-out.component.scss',
})
export class TimeOutComponent {
  @Input('isMobile') isMobile: boolean = false;
  
  public readonly timeOutForm = new FormGroup({
    hours: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  public submitForm() {
    console.log(this.timeOutForm.value);
  }
}
