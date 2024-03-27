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
  selector: 'gb-web-home',
  templateUrl: './web-home.component.html',
  styleUrl: './web-home.component.scss',
  animations: [collapse],
})
export class WebHomeComponent implements AfterViewInit, OnInit {
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  public data = { type: 'casino-games', value: 'slots' };

  public isUserInfoOpen: boolean = false;
  public currentUser: IUserInfo | null = null;

  public OPTIONS = [88.5, 45.9, 55.05, 70.0];
  public selectedOption = this.OPTIONS[0];
  public showDropdown: boolean = false;

  constructor(private actionService: ActionsService) {}

  @HostListener('window:blur', ['$event'])
  onWindowBlur(): void {
    this.isUserInfoOpen = false;
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
    this.actionService.setData({ type: this.data.type, value: gameSubType });
    this.data.value = gameSubType;
    if (this.iframeRef) {
      this.iframeRef.nativeElement.contentWindow.postMessage(
        { type: this.data.value },
        'http://192.168.0.117:4200/'
      );
    }
  }

  public toggleDropdown(event: Event) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  public toggleAuth(event: Event) {
    event.stopPropagation();
    this.isUserInfoOpen = !this.isUserInfoOpen;
  }
}
