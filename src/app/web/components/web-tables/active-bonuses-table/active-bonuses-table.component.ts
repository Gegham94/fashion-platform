import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ACTIVE_BONUSES_TABLE_DATA,
  ACTIVE_BONUSES_TABLE_HEADER,
  CURRENCY,
  STATE,
  TYPE,
  TYPE_ACTIVE_BONUSES_TABLE_DATA,
  TYPE_FILTER,
  TYPE_TABLE_HEADER,
} from 'src/app/shared/constants/contstants';

@Component({
  selector: 'app-active-bonuses-table',
  templateUrl: './active-bonuses-table.component.html',
  styleUrl: './active-bonuses-table.component.scss',
})
export class ActiveBonusesTableComponent implements OnInit, OnDestroy {
  public tableData: TYPE_ACTIVE_BONUSES_TABLE_DATA[] =
    ACTIVE_BONUSES_TABLE_DATA;
  public tableHeader: TYPE_TABLE_HEADER[] = ACTIVE_BONUSES_TABLE_HEADER;

  public state: TYPE_FILTER[] = STATE;
  public type: TYPE_FILTER[] = TYPE;
  public currency: TYPE_FILTER[] = CURRENCY;
  public isLoading: boolean = false;

  public filterForm = {
    from: [],
    to: [],
    state: [],
    type: [],
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

  public onSelectStateFilter(options: any) {
    this.filterForm.state = options;
  }

  public onSelectTypeFilter(options: any) {
    this.filterForm.type = options;
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
