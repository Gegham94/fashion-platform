import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plastic-card',
  templateUrl: './plastic-card.component.html',
  styleUrls: ['./plastic-card.component.scss']
})
export class PlasticCardComponent {
  public plasticCardNumber: string = '1234123412341234'
}
