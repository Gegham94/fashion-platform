import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-money-friends',
  templateUrl: './send-money-friends.component.html',
  styleUrl: './send-money-friends.component.scss',
})
export class SendMoneyFriendsComponent {
  @Input('isMobile') isMobile: boolean = false;
  
  public readonly sendMoneyForm = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
  });
  public tableHeader = [
    { name: 'Date and time' },
    { name: 'Type' },
    { name: 'ID' },
    { name: 'Amount' },
  ];
  public tableData = [
    { dateAndTime: '12/12/2023', type: 'Recive', id: '123456', amount: '1000' },
    { dateAndTime: '10/12/2023', type: 'Sent', id: '123456', amount: '2000' },
    { dateAndTime: '12/12/2023', type: 'Recive', id: '123456', amount: '2000' },
    { dateAndTime: '12/12/2023', type: 'Recive', id: '123456', amount: '2000' },
    { dateAndTime: '10/12/2023', type: 'Sent', id: '123456', amount: '4000' },
    { dateAndTime: '12/12/2023', type: 'Sent', id: '123456', amount: '2000' },
    { dateAndTime: '12/12/2023', type: 'Recive', id: '123456', amount: '2000' },
    { dateAndTime: '10/12/2023', type: 'Recive', id: '123456', amount: '4000' },
    { dateAndTime: '12/12/2023', type: 'Sent', id: '123456', amount: '2000' },
    { dateAndTime: '12/12/2023', type: 'Recive', id: '123456', amount: '3000' },
    { dateAndTime: '12/12/2023', type: 'Sent', id: '123456', amount: '2000' },
  ];

  public getSelectedValue(event: any) {
    this.sendMoneyForm.get('currency')?.setValue(event.key);
  }

  public sendMessage() {
    console.log(this.sendMoneyForm.value);
  }
}
