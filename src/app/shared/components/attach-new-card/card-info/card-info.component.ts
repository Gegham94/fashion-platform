import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TYPE_CARD, MONTH, YEAR } from 'src/app/shared/constants/attach-card';

@Component({
  selector: 'gb-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  @Output('emitTabValue') emitTabValue: EventEmitter<any> = new EventEmitter();
  @Input('isMobile') isMobile: boolean = false;

  public month: TYPE_CARD[] = MONTH;
  public year: TYPE_CARD[] = YEAR;

  public readonly newCardForm = new FormGroup({
    cardHolderName: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required]),
    month: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    cvc_cvv: new FormControl('', [Validators.required]),
  });

  public onNext() {
    this.emitTabValue.emit(2);
  }

  public onSelectValue(controlName: string, properties: any) {
    this.newCardForm.get(`${controlName}`)?.setValue(properties.option.name);
  }
}
