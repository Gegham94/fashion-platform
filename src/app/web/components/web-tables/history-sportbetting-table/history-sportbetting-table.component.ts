import { Component, OnDestroy, OnInit } from '@angular/core';
import { TYPE_FILTER, STATUS, BET_TYPE, CURRENCY } from 'src/app/shared/constants/filters';
import { TYPE_HISTORY_SPORTBETTING_TABLE_DATA, HISTORY_SPORTBETTING_TABLE_DATA, TYPE_TABLE_HEADER, HISTORY_SPORTBETTING_TABLE_HEADER } from 'src/app/shared/constants/tables';


@Component({
  selector: 'gb-history-sportbetting-table',
  templateUrl: './history-sportbetting-table.component.html',
  styleUrl: './history-sportbetting-table.component.scss',
})
export class HistorySportbettingTableComponent implements OnInit, OnDestroy {
  public tableData: TYPE_HISTORY_SPORTBETTING_TABLE_DATA[] =
    HISTORY_SPORTBETTING_TABLE_DATA;
  public tableHeader: TYPE_TABLE_HEADER[] = HISTORY_SPORTBETTING_TABLE_HEADER;

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
