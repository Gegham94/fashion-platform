import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-link-your-phone',
  templateUrl: './link-your-phone.component.html',
  styleUrl: './link-your-phone.component.scss',
})
export class LinkYourPhoneComponent {
  public readonly linkPhoneForm = new FormGroup({
    currentPhoneNumber: new FormControl('', [Validators.required]),
    updatePhoneNumber: new FormControl('', [Validators.required]),
  });

  public submitForm() {
    console.log(this.linkPhoneForm.value);
  }

  public onRemoveNumber() {
    this.linkPhoneForm.get('currentPhoneNumber')?.reset();
    console.log(this.linkPhoneForm.value);
  }
}
