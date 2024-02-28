import { Component, OnInit } from '@angular/core';
import {
  MENU_BALANCE,
  TYPE_MENU_BALANCE,
} from 'src/app/shared/constants/contstants';
import { IUserAmountInfo } from 'src/app/shared/interfaces/IUserInfo';

@Component({
  selector: 'app-web-balance',
  templateUrl: './web-balance.component.html',
  styleUrls: ['./web-balance.component.scss'],
})
export class WebBalanceComponent implements OnInit {
  public OPTIONS: TYPE_MENU_BALANCE[] = MENU_BALANCE;
  public selectedOption: TYPE_MENU_BALANCE = this.OPTIONS[0];
  public data: IUserAmountInfo[] = [
    {
      title: 'Balance',
      amount: 'Available Amount',
      played: 'Played Amount',
      unplayed: 'Unplayed Amount',
      amountValue: 188888,
      playedValue: 2888,
      unplayedValue: 168888,
    },
    {
      title: 'Bonus',
      amount: 'Total Amount',
      played: 'Played Bonus Amount',
      unplayed: 'Unplayed Bonus Amount',
      amountValue: 198888,
      playedValue: 3500,
      unplayedValue: 150888,
    },
  ];
  public isLoading = false;

  constructor() {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public onSelectItemHandler(option: TYPE_MENU_BALANCE) {
    this.selectedOption = option;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
