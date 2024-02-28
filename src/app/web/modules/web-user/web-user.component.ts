import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserPlatformTabs } from 'src/app/shared/enum/EUserPlatformTabs';

@Component({
  selector: 'app-web-user',
  templateUrl: './web-user.component.html',
  styleUrls: ['./web-user.component.scss'],
})
export class WebUserComponent implements AfterViewInit, OnInit {
  @ViewChild('tabElementRef') tabElementRef!: ElementRef;
  @ViewChild('tooltipRef') tooltipRef!: ElementRef;
  @ViewChild('haederRef') haederRef!: ElementRef;

  public tabs = UserPlatformTabs;

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
    const element = this.tabElementRef.nativeElement as HTMLElement;
    this.getElementPositionHandler(element);
  }

  public selectTab(event: any, tabId: number) {
    this.tabs.forEach((tab: any) => (tab.isActive = false));
    this.tabs[tabId].isActive = true;
    const elemTab = event as HTMLElement;
    this.tabElementRef.nativeElement = event;
    this.getElementPositionHandler(elemTab);
  }

  public getElementPositionHandler(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    let rectContainer = this.tooltipRef.nativeElement.getBoundingClientRect();
    const elemPosition = {
      left: ((rect.left - rectContainer.left) / rectContainer.width) * 100,
      width: (element.offsetWidth / rectContainer.width) * 100,
    };
    this.haederRef.nativeElement.style.setProperty(
      '--elemLeft',
      elemPosition.left + '%'
    );
    this.haederRef.nativeElement.style.setProperty(
      '--elemWidth',
      elemPosition.width + '%'
    );
  }

  public onResizeEnd() {
    this.getElementPositionHandler(this.tabElementRef.nativeElement);
  }
}
