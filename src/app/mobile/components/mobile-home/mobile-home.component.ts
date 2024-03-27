import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { collapse } from 'src/app/shared/animations/animations';
import { IUserInfo } from 'src/app/shared/interfaces/IUserInfo';
import { ActionsService } from 'src/app/shared/services/actions.service';

@Component({
  selector: 'gb-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss',
  animations: [collapse],
})
export class MobileHomeComponent implements AfterViewInit, OnInit {
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  @ViewChild('gameTypesElementRef') gameTypesElementRef!: ElementRef<any>;
  public data = { type: 'casino-games', value: 'slots' };
  public currentUser: IUserInfo | null = null;
  public isUserInfoOpen: boolean = false;
  public showGameTypes: boolean = false;

  public TIME_OPTIONS = ['20:37:34 GTM+4', '18:37:34 GTM+4', '15:37:25 GTM+4'];
  public selectedTimeOption = this.TIME_OPTIONS[0];
  public showTimeDropdown: boolean = false;

  public DECIMAL_OPTIONS = ['Decimal', 'Decimal', 'Decimal'];
  public selectedDecimalOption = this.DECIMAL_OPTIONS[0];
  public showDecimalDropdown: boolean = false;

  constructor(private actionService: ActionsService) {}

  @HostListener('window:blur', ['$event'])
  onWindowBlur(): void {
    this.isUserInfoOpen = false;
    this.showGameTypes = false;
  }

  public ngOnInit() {
    this.actionService.data$.subscribe((data) => {
      this.data = data;
    });
    this.currentUser = {
      id: 22585455,
      firstName: 'Firstname',
      lastName: 'Lastname',
      userName: 'Username999',
      email: 'test@gmail.com',
      phoneNumber: '+374558888',
      dateOfBirth: '12/12/2012',
      location: 'Armenia',
      loyalPoints: '555',
      image: null,
      verified: false,
      api_token: 'DcsF4R744fgx45xsst458',
    };
  }

  public ngAfterViewInit() {
    this.sendGameTypeToParent(this.data.type);
    this.sendGameSubTypeToParent(this.data.value);
  }

  public sendGameTypeToParent(gametype: string) {
    setTimeout(()=> {this.showGameTypes = false}, 150)
    this.actionService.setData({ type: gametype, value: this.data.value });
    this.data.type = gametype;
    if (this.iframeRef) {
      this.iframeRef.nativeElement.contentWindow.postMessage(
        { type: this.data.type },
        'http://192.168.0.117:4200/'
      );
    }
  }

  public sendGameSubTypeToParent(gameSubType: string) {
    setTimeout(()=> {this.showGameTypes = false}, 150)
    this.actionService.setData({ type: this.data.type, value: gameSubType });
    this.data.value = gameSubType;
    if (this.iframeRef) {
      this.iframeRef.nativeElement.contentWindow.postMessage(
        { type: this.data.value },
        'http://192.168.0.117:4200/'
      );
    }
  }

  public toggleTimeDropdown(event: Event) {
    event.stopPropagation();
    this.showTimeDropdown = !this.showTimeDropdown;
  }

  public toggleDecimalDropdown(event: Event) {
    event.stopPropagation();
    this.showDecimalDropdown = !this.showDecimalDropdown;
  }

  public toggleAuth(event: Event) {
    event.stopPropagation();
    this.isUserInfoOpen = !this.isUserInfoOpen;
  }

  public toggleGameTypes(event: Event) {
    event.stopPropagation();
    this.showGameTypes = !this.showGameTypes;
  }
}
