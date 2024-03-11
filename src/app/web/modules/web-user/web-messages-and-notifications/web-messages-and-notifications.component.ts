import { Component, OnInit } from '@angular/core';
import { STATUS, TYPE, TYPE_FILTER } from 'src/app/shared/constants/filters';

@Component({
  selector: 'app-web-messages-and-notifications',
  templateUrl: './web-messages-and-notifications.component.html',
  styleUrls: ['./web-messages-and-notifications.component.scss'],
})
export class WebMessagesAndNotificationsComponent implements OnInit {
  public createMessage: boolean = false;
  public status: TYPE_FILTER[] = STATUS;
  public betType: TYPE_FILTER[] = TYPE;
  public selectedMessage: any;
  public isLoading: boolean = false;

  public filterForm = {
    from: [],
    to: [],
    isFavorite: false,
    status: [],
    type: [],
  };
  constructor() {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public ngOnDestroy(): void {}

  public getSelectedMessage(event: any) {
    this.selectedMessage = event;
  }

  public onSelectFavorite() {
    this.filterForm.isFavorite = !this.filterForm.isFavorite;
  }

  public getSearchedText(event: any): void {}

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

  public createNewMessage(event: boolean) {
    this.createMessage = event;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
