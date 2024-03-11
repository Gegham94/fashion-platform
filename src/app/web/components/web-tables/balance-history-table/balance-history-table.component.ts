import { Component, OnInit } from '@angular/core';
import { collapse } from 'src/app/shared/animations/animations';
import { TYPE_FILTER, STATUS, METHOD, CURRENCY } from 'src/app/shared/constants/filters';
import { TYPE_BALANCE_HISTORY_TABLE_DATA, BALANCE_HISTORY_TABLE_DATA, TYPE_TABLE_HEADER, BALANCE_HISTORY_TABLE_HEADER } from 'src/app/shared/constants/tables';

@Component({
  selector: 'app-balance-history-table',
  templateUrl: './balance-history-table.component.html',
  styleUrls: ['./balance-history-table.component.scss'],
  animations: [collapse],
})
export class BalanceHistoryTableComponent implements OnInit {
  public tableData: TYPE_BALANCE_HISTORY_TABLE_DATA[] =
    BALANCE_HISTORY_TABLE_DATA;
  public tableHeader: TYPE_TABLE_HEADER[] = BALANCE_HISTORY_TABLE_HEADER;

  public status: TYPE_FILTER[] = STATUS;
  public method: TYPE_FILTER[] = METHOD;
  public currency: TYPE_FILTER[] = CURRENCY;

  public filterForm = {
    from: [],
    to: [],
    status: [],
    method: [],
    currency: [],
  };

  public ngOnInit(): void {}

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
}
