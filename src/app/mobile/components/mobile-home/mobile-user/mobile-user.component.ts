import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserPlatformTabs } from 'src/app/shared/constants/user-platform-tabs';

@Component({
  selector: 'gb-mobile-user',
  templateUrl: './mobile-user.component.html',
  styleUrls: ['./mobile-user.component.scss'],
})
export class MobileUserComponent implements AfterViewInit, OnInit {
  @ViewChildren('tabElementRef') tabElementRef!: QueryList<any>;
  @ViewChild('headerRef') headerRef!: ElementRef;

  public tabs = UserPlatformTabs;
  public isLoading = false;

  public ngOnInit(){
    this.tabs.forEach((tab: any) => (tab.isActive = false));
    this.tabs[0].isActive = true;
  }

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
