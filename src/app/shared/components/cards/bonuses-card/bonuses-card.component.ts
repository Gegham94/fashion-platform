import { Component, Input } from '@angular/core';

@Component({
  selector: 'gb-bonuses-card',
  templateUrl: './bonuses-card.component.html',
  styleUrl: './bonuses-card.component.scss',
})
export class BonusesCardComponent {
  @Input('option') option: any;
  @Input('isMobile') isMobile: boolean = false;
}
