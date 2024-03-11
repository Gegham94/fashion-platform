import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TYPE_FILTER, STATUS, TYPE } from 'src/app/shared/constants/filters';

@Component({
  selector: 'app-mobile-messages-and-notifications',
  templateUrl: './mobile-messages-and-notifications.component.html',
  styleUrls: ['./mobile-messages-and-notifications.component.scss'],
})
export class MobileMessagesAndNotificationsComponent implements OnInit {
  public isLoading: boolean = false;

  public status: TYPE_FILTER[] = STATUS;
  public betType: TYPE_FILTER[] = TYPE;
  public selectedMessage: any;

  public filterForm = {
    from: [],
    to: [],
    isFavorite: false,
    status: [],
    type: [],
  };
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public ngOnDestroy(): void {}

  public onSelectFavorite() {
    this.filterForm.isFavorite = !this.filterForm.isFavorite;
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

  public onSelectTypeFilter(options: any) {
    this.filterForm.type = options;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
