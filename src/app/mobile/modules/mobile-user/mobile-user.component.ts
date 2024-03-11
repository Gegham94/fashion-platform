import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserPlatformTabs } from 'src/app/shared/constants/user-platform-tabs';

@Component({
  selector: 'app-mobile-user',
  templateUrl: './mobile-user.component.html',
  styleUrls: ['./mobile-user.component.scss'],
})
export class MobileUserComponent implements AfterViewInit {
  @ViewChildren('tabElementRef') tabElementRef!: QueryList<any>;
  @ViewChild('headerRef') headerRef!: ElementRef;

  public tabs = UserPlatformTabs;
  public isLoading = false;

  public ngAfterViewInit() {
    this.tabElementRef.toArray()[0].nativeElement.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  public selectTab(tabId: number) {
    this.showLoader();
    this.tabs.forEach((tab) => (tab.isActive = false));
    this.tabs[tabId].isActive = true;
    const tabElement = this.tabElementRef.toArray();
    const selectedTabElement = tabElement[tabId].nativeElement;
    selectedTabElement.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
