import { Component, Input, OnInit } from '@angular/core';
import { IUserAmountInfo } from 'src/app/shared/interfaces/IUserInfo';

@Component({
  selector: 'app-amount-card',
  templateUrl: './amount-card.component.html',
  styleUrls: ['./amount-card.component.scss'],
})
export class AmountCardComponent implements OnInit {
  @Input('buttonType') buttonType: string = '';
  @Input('buttonColor') buttonColor: string = '';
  @Input('borderColor') borderColor: string = '';
  @Input('dropdownButtonType') dropdownButtonType: string = '';
  @Input('data') data!: IUserAmountInfo;

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
