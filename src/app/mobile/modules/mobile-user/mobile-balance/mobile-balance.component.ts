import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TYPE_MENU_BALANCE, MENU_BALANCE } from 'src/app/shared/constants/menu-balance';
import { IUserAmountInfo } from 'src/app/shared/interfaces/IUserInfo';

@Component({
  selector: 'app-mobile-balance',
  templateUrl: './mobile-balance.component.html',
  styleUrls: ['./mobile-balance.component.scss'],
})
export class MobileBalanceComponent implements AfterViewInit {
  @ViewChild('tabElementRef') tabElementRef!: ElementRef;
  @ViewChild('tooltipRef') tooltipRef!: ElementRef;
  @ViewChild('haederRef') haederRef!: ElementRef;
  public OPTIONS: TYPE_MENU_BALANCE[] = MENU_BALANCE;
  public selectedOption: TYPE_MENU_BALANCE = this.OPTIONS[0];
  public data: IUserAmountInfo[] = [
    {
      title: 'Balance',
      amount: 'Available Amount',
      played: 'Played Amount',
      unplayed: 'Unplayed Amount',
      amountValue: 188888,
      playedValue: 2888,
      unplayedValue: 168888,
    },
    {
      title: 'Bonus',
      amount: 'Total Amount',
      played: 'Played Bonus Amount',
      unplayed: 'Unplayed Bonus Amount',
      amountValue: 198888,
      playedValue: 3500,
      unplayedValue: 150888,
    },
  ];

  public ngOnInit(): void {}

  public ngAfterViewInit() {
    const element = this.tabElementRef.nativeElement as HTMLElement;
    this.getElementPositionHandler(element);
  }

  public selectTab(event: any, option: TYPE_MENU_BALANCE) {
    this.OPTIONS.forEach((item: TYPE_MENU_BALANCE) => (item.isActive = false));
    this.OPTIONS[option.id].isActive = true;
    this.selectedOption = option;
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
