import { Component } from '@angular/core';
import { UserPlatformHistory } from 'src/app/shared/enum/EUserPlatformHistory';

@Component({
  selector: 'app-mobile-history',
  templateUrl: './mobile-history.component.html',
  styleUrls: ['./mobile-history.component.scss']
})
export class MobileHistoryComponent {
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
