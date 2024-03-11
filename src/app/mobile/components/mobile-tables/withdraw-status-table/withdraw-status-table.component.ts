import { Component, OnDestroy, OnInit } from '@angular/core';
import { TYPE_FILTER, STATUS, METHOD, CURRENCY } from 'src/app/shared/constants/filters';
import { TYPE_WITHDRAW_STATUS_TABLE_DATA, WITHDRAW_STATUS_TABLE_DATA } from 'src/app/shared/constants/tables';

@Component({
  selector: 'app-withdraw-status-table',
  templateUrl: './withdraw-status-table.component.html',
  styleUrls: ['./withdraw-status-table.component.scss'],
})
export class WithdrawStatusTableComponent implements OnInit, OnDestroy {
  public tableData: TYPE_WITHDRAW_STATUS_TABLE_DATA[] =
    WITHDRAW_STATUS_TABLE_DATA;
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

  constructor() {}

  public ngOnInit(): void {}

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
}
