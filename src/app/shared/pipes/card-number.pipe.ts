import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber',
})
export class CardNumberPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!cardNumber || cardNumber.length !== 16) {
      return 'Invalid card number';
    }
    const maskedNumber = '**** **** **** ' + cardNumber.slice(12);
    return maskedNumber;
  }
}
