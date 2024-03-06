import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-number-sender',
  templateUrl: './email-number-sender.component.html',
  styleUrl: './email-number-sender.component.scss',
})
export class EmailNumberSenderComponent {
  @Output('emitTabValue') emitTabValue: EventEmitter<any> = new EventEmitter();
  @Input('isMobile') isMobile: boolean = false;

  public readonly recoverForm = new FormGroup({
    emailNumber: new FormControl('', [Validators.required]),
  });

  public get emailNumberControl(): FormControl {
    return this.recoverForm.get('emailNumber') as FormControl;
  }

  public submitForm() {
    this.emitTabValue.emit(2);
  }
}
