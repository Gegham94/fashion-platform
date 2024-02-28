import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sportsbook-card',
  templateUrl: './sportsbook-card.component.html',
  styleUrl: './sportsbook-card.component.scss',
})
export class SportsbookCardComponent {
  @Input('isMobile') isMobile: boolean = false;
  public selectedItem: any;

  public readonly sportsbookForm = new FormGroup({
    minAmount: new FormControl('', [Validators.required]),
    maxAmount: new FormControl('', [Validators.required]),
  });

  public getSelectedValue(event: any) {
    this.selectedItem = event;
  }

  public submitForm() {
    console.log(this.sportsbookForm.value);
  }
}
