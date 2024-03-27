import { Component, OnInit } from '@angular/core';
import {
  TYPE_MENU_BALANCE,
  MENU_BALANCE,
} from 'src/app/shared/constants/menu-balance';
import { PlasticCards } from 'src/app/shared/constants/plastic-cards';

@Component({
  selector: 'gb-web-balance',
  templateUrl: './web-balance.component.html',
  styleUrls: ['./web-balance.component.scss'],
})
export class WebBalanceComponent implements OnInit {
  public OPTIONS: TYPE_MENU_BALANCE[] = MENU_BALANCE;
  public selectedOption: TYPE_MENU_BALANCE = this.OPTIONS[0];
  public cards = PlasticCards;
  
  public balance = {
    title: 'Balance',
    amount: 'Available Amount',
    played: 'Played Amount',
    unplayed: 'Unplayed Amount',
    amountValue: 188888,
    playedValue: 2888,
    unplayedValue: 168888,
  }
  public bonus = {
    title: 'Bonus',
    amount: 'Total Amount',
    played: 'Played Bonus Amount',
    unplayed: 'Unplayed Bonus Amount',
    amountValue: 198888,
    playedValue: 3500,
    unplayedValue: 150888,
  }
  public isLoading = false;

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
