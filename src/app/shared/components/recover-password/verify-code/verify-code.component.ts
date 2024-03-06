import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss',
})
export class VerifyCodeComponent {
  @Output('emitTabValue') emitTabValue: EventEmitter<any> = new EventEmitter();
  @Input('isMobile') isMobile: boolean = false;

  inputs: string[] = ['', '', '', '', '', ''];

  public readonly verifyForm = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
  });

  public onInputChange(index: number, event: any) {
    const inputLength = event.target.value.length;
    const inputValue = event.target.value;
    const regex = /^\d*$/;
    
    if (regex.test(inputValue)) {
      if (inputLength === 1 && index < 5) {
        const nextInput = event.target.parentElement.nextElementSibling.querySelector('input');
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else {
      event.target.value = '';
    }
  }

  public onInputRemove(index: number, event: any) {
    if ((event.code === 'Backspace' || event.keyCode === 8) && index > 0) {
      const inputLength = event.target.value.length;
      if (inputLength === 0 && index > 0) {
        const prevInput = event.target.parentElement.previousElementSibling.querySelector('input');
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  }

  public onSend() {
    this.emitTabValue.emit(3);
  }

  public onResend() {
    this.emitTabValue.emit(1);
  }
}
