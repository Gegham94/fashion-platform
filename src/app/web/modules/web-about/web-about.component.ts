import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AboutTabs } from 'src/app/shared/enum/EAboutTabs';

@Component({
  selector: 'app-web-about',
  templateUrl: './web-about.component.html',
  styleUrls: ['./web-about.component.scss'],
})
export class WebAboutComponent implements AfterViewInit {
  @ViewChild('tabElementAboutRef') tabElementAboutRef!: ElementRef;
  @ViewChild('tooltipAboutRef') tooltipAboutRef!: ElementRef;
  @ViewChild('haederAboutRef') haederAboutRef!: ElementRef;

  public tabs = AboutTabs;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.activatedRoute.firstChild;
        if (childRoute) {
          const currentChildRoute = childRoute.snapshot.url.join('/');
          const matchingTab = this.tabs.find(
            (tab) => tab.router === currentChildRoute
          );
          if (matchingTab) {
            const selectedTab = document.getElementById(`${matchingTab.id}`);
            this.selectTab(selectedTab, matchingTab.id);
          } else {
            this.selectTab(document.getElementById('0'), 0);
          }
        }
      });
  }

  public ngAfterViewInit() {
    const element = this.tabElementAboutRef.nativeElement as HTMLElement;
    this.getElementPositionHandler(element);
  }

  public selectTab(event: any, tabId: number) {
    this.tabs.forEach((tab: any) => (tab.isActive = false));
    this.tabs[tabId].isActive = true;
    const elemTab = event as HTMLElement;
    this.tabElementAboutRef.nativeElement = event;
    this.getElementPositionHandler(elemTab);
  }

  public getElementPositionHandler(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    let rectContainer =
      this.tooltipAboutRef.nativeElement.getBoundingClientRect();
    const elemPosition = {
      left: ((rect.left - rectContainer.left) / rectContainer.width) * 100,
      width: (element.offsetWidth / rectContainer.width) * 100,
    };
    this.haederAboutRef.nativeElement.style.setProperty(
      '--elemLeft',
      elemPosition.left + '%'
    );
    this.haederAboutRef.nativeElement.style.setProperty(
      '--elemWidth',
      elemPosition.width + '%'
    );
  }

  public onResizeEnd() {
    this.getElementPositionHandler(this.tabElementAboutRef.nativeElement);
  }
}
