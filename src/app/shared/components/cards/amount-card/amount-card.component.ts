import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gb-amount-card',
  templateUrl: './amount-card.component.html',
  styleUrls: ['./amount-card.component.scss'],
})
export class AmountCardComponent implements OnInit {
  @Input('buttonType') buttonType: string = '';
  @Input('buttonColor') buttonColor: string = '';
  @Input('dropdownButtonType') dropdownButtonType: string = '';
  @Input('isMobile') isMobile: boolean = false;
  @Input('data') data!: any;

  public selectedItem: any;

  public ngOnInit(): void {}

  public getSelectedValue(event: any) {
    this.selectedItem = event;
  }

  public formatNumber(number: number) {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
