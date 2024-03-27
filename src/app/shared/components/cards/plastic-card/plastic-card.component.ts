import { Component, Input } from '@angular/core';

@Component({
  selector: 'gb-plastic-card',
  templateUrl: './plastic-card.component.html',
  styleUrls: ['./plastic-card.component.scss']
})
export class PlasticCardComponent {
  @Input('cardType') cardType: string = 'visa';
  @Input('cardNumber') cardNumber: string = '';
  @Input('isDeposit') isDeposit: boolean = true;
  @Input('option') option: any;
}
