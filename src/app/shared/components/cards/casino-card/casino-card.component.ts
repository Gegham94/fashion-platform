import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-casino-card',
  templateUrl: './casino-card.component.html',
  styleUrl: './casino-card.component.scss',
})
export class CasinoCardComponent {
  @Input('isMobile') isMobile: boolean = false;
  public selectedItem: any;

  public readonly casinoForm = new FormGroup({
    minAmount: new FormControl('', [Validators.required]),
    maxAmount: new FormControl('', [Validators.required]),
  });

  public getSelectedValue(event: any) {
    this.selectedItem = event;
  }

  public submitForm() {
    console.log(this.casinoForm.value);
  }
}
