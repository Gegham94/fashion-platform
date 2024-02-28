import { Component } from '@angular/core';
import { CURRENCY, METHOD, STATUS, TYPE_FILTER } from 'src/app/shared/constants/contstants';

@Component({
  selector: 'app-mobile-active-bets',
  templateUrl: './mobile-active-bets.component.html',
  styleUrls: ['./mobile-active-bets.component.scss']
})
export class MobileActiveBetsComponent {
  public status: TYPE_FILTER[] = STATUS;
  public method: TYPE_FILTER[] = METHOD;
  public currency: TYPE_FILTER[] = CURRENCY;
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
