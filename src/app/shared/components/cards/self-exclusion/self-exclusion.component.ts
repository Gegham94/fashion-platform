import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-self-exclusion',
  templateUrl: './self-exclusion.component.html',
  styleUrl: './self-exclusion.component.scss',
})
export class SelfExclusionComponent {
  @Input('isMobile') isMobile: boolean = false;
  
  public readonly selfExclusionForm = new FormGroup({
    hours: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  public submitForm() {
    console.log(this.selfExclusionForm.value);
  }
}
