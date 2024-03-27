import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-deposit-card',
  templateUrl: './deposit-card.component.html',
  styleUrl: './deposit-card.component.scss',
})
export class DepositCardComponent {
  @Input('isMobile') isMobile: boolean = false;
  public selectedItem: any;

  public readonly depositForm = new FormGroup({
    dailyAmount: new FormControl('', [Validators.required]),
    weeklyAmount: new FormControl('', [Validators.required]),
    monthlyAmount: new FormControl('', [Validators.required]),
  });

  public getSelectedValue(event: any) {
    this.selectedItem = event;
  }

  public submitForm() {
    console.log(this.depositForm.value);
  }
}
