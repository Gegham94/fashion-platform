import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bonuses-card',
  templateUrl: './bonuses-card.component.html',
  styleUrl: './bonuses-card.component.scss',
})
export class BonusesCardComponent {
  @Input('option') option: any;
  @Input('isMobile') isMobile: boolean = false;
}
