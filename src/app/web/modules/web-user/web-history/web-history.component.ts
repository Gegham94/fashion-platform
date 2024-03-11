import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserPlatformHistory } from 'src/app/shared/constants/user-platform-history';

@Component({
  selector: 'app-web-history',
  templateUrl: './web-history.component.html',
  styleUrls: ['./web-history.component.scss'],
})
export class WebHistoryComponent implements OnDestroy, OnInit {
  public historyType = UserPlatformHistory;
  
  public ngOnInit(): void {
    this.historyType[0].isActive = true;
  }
  public ngOnDestroy(): void {
    this.historyType.forEach((tab) => (tab.isActive = false));
  }

  public selectHistoryType(tabId: number) {
    this.historyType.forEach((tab) => (tab.isActive = false));
    this.historyType[tabId].isActive = true;
  }
}
