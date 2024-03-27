import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'gb-verify-card-code',
  templateUrl: './verify-card-code.component.html',
  styleUrl: './verify-card-code.component.scss',
})
export class VerifyCardCodeComponent implements AfterViewInit {
  @Output('closeAttachNewCard') closeAttachNewCard: EventEmitter<any> = new EventEmitter();
  @Output('emitTabValue') emitTabValue: EventEmitter<any> = new EventEmitter();
  @Input('isMobile') isMobile: boolean = false;
  public lastDigit: string = '';

  public ngAfterViewInit() {
    const inputsList = document.getElementById('inputs_list');
    if (inputsList) inputsList.children[0].querySelector('input')?.focus();
  }

  public readonly verifyForm = new FormGroup({
    digit_1: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.pattern('^\d{1}$'),
    ]),
    digit_2: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern('^\d{1}$'),
    ]),
    digit_3: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern('^\d{1}$'),
    ]),
    digit_4: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern('^\d{1}$'),
    ]),
    digit_5: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern('^\d{1}$'),
    ]),
    digit_6: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern('^\d{1}$'),
    ]),
  });

  public onInputChange(value: number, event: any) {
    const inputLength = event.target.value.length;
    if (inputLength === 1 && value < 6) {
      const nextInput =
        event.target.parentElement.nextElementSibling?.querySelector('input');
      if (nextInput) {
        nextInput.disabled = false;
        nextInput.focus();
      }
    } else if (value === 6) {
      event.target.value = event.target.value[0];
    }
  }

  public onInputRemove(value: number, event: any) {
    if (
      (event.code === 'Backspace' ||
        event.keyCode === 8 ||
        event.code === 'ArrowLeft') &&
      value > 1
    ) {
      const inputLength = event.target.value.length;
      if (inputLength === 0 && value > 1) {
        const prevInput =
          event.target.parentElement.previousElementSibling?.querySelector(
            'input'
          );
        if (prevInput) {
          event.target.parentElement.querySelector('input').disabled = true;
          prevInput.value = '';
          prevInput.focus();
        }
      } else if (value === 1) {
        event.target.value = '';
      }
    }
  }

  public onVerify() {
    if (this.verifyForm.valid) {
      this.closeAttachNewCard.emit(true);
    }
  }

  public onResend() {
    this.emitTabValue.emit(1);
  }
}
