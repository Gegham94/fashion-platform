import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BET_TYPE,
  CURRENCY,
  STATUS,
  TYPE_FILTER,
} from 'src/app/shared/constants/contstants';

@Component({
  selector: 'app-web-active-bets',
  templateUrl: './web-active-bets.component.html',
  styleUrls: ['./web-active-bets.component.scss'],
})
export class WebActiveBetsComponent implements OnInit, OnDestroy {
  public status: TYPE_FILTER[] = STATUS;
  public betType: TYPE_FILTER[] = BET_TYPE;
  public currency: TYPE_FILTER[] = CURRENCY;
  public isLoading = false;

  public filterForm = {
    from: [],
    to: [],
    status: [],
    betType: [],
    currency: [],
  };
  constructor() {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public ngOnDestroy(): void {}

  public getSearchedText(event: any): void {
    console.log(event);
  }

  public onSelectDateFrom(event: any) {
    if (event.target) {
      this.filterForm.from = event.target.value;
    }
  }

  public onSelectDateTo(event: any) {
    if (event.target) {
      this.filterForm.to = event.target.value;
    }
  }

  public onSelectStatusFilter(options: any) {
    this.filterForm.status = options;
  }

  public onSelectBetTypeFilter(options: any) {
    this.filterForm.betType = options;
  }

  public onSelectCurrencyFilter(options: any) {
    this.filterForm.currency = options;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
