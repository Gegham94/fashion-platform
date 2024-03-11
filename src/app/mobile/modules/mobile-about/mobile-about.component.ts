import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AboutTabs } from 'src/app/shared/constants/about-tabs';

@Component({
  selector: 'app-mobile-about',
  templateUrl: './mobile-about.component.html',
  styleUrls: ['./mobile-about.component.scss'],
})
export class MobileAboutComponent implements AfterViewInit {
  @ViewChildren('tabElementRef') tabElementRef!: QueryList<any>;
  @ViewChild('headerRef') headerRef!: ElementRef;

  public tabs = AboutTabs;
  public isLoading = false;

  constructor() {}
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
