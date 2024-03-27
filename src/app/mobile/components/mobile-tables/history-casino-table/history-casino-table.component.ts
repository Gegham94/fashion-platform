import { Component } from '@angular/core';
import { TYPE_FILTER, STATUS, CURRENCY, METHOD } from 'src/app/shared/constants/filters';
import { TYPE_HISTORY_CASINO_TABLE_DATA, HISTORY_CASINO_TABLE_DATA, TYPE_TABLE_HEADER, HISTORY_CASINO_TABLE_HEADER } from 'src/app/shared/constants/tables';


@Component({
  selector: 'gb-history-casino-table',
  templateUrl: './history-casino-table.component.html',
  styleUrl: './history-casino-table.component.scss',
})
export class HistoryCasinoTableComponent {
  public tableData: TYPE_HISTORY_CASINO_TABLE_DATA[] =
    HISTORY_CASINO_TABLE_DATA;
  public tableHeader: TYPE_TABLE_HEADER[] = HISTORY_CASINO_TABLE_HEADER;

  public status: TYPE_FILTER[] = STATUS;
  public currency: TYPE_FILTER[] = CURRENCY;
  public method: TYPE_FILTER[] = METHOD;
  public isLoading = false;

  public filterForm = {
    from: [],
    to: [],
    status: [],
    method: [],
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

  public onSelectMethodFilter(options: any) {
    this.filterForm.method = options;
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
