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

@Component({
  selector: 'gb-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss',
  animations: [collapse],
})
export class MobileHomeComponent implements AfterViewInit, OnInit {
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
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

  constructor() {}

  @HostListener('window:blur', ['$event'])
  onWindowBlur(): void {
    this.isUserInfoOpen = false;
    this.showGameTypes = false;
    this.showTimeDropdown = false;
    this.showDecimalDropdown = false;
  }

  public ngOnInit() {
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
    this.loadFrameModule(this.data.type);
    this.setGameType(this.data.value);
  }

  public loadFrameModule(gametype: string) {
    setTimeout(()=> {this.showGameTypes = false}, 150)
    this.data.type = gametype;
    switch(this.data.type) {
      case 'casino-games':
        this.data.value = 'slots';
        this.iframeRef.nativeElement.setAttribute('src', 'http://192.168.0.117:4200/2/slots')
        break;
      case 'sports-book':
        this.data.value = 'in-play';
        this.iframeRef.nativeElement.setAttribute('src', 'http://192.168.0.117:4200/2/in-play')
        break;
    }
  }

  public setGameType(gameType: string) {
    setTimeout(()=> {this.showGameTypes = false}, 150)
    this.data.value = gameType;
    if(gameType === 'slots' || gameType === 'live-dealer'){
      this.iframeRef.nativeElement.setAttribute('src', `http://192.168.0.117:4200/1/${gameType}`)
    }
    if(gameType === 'in-play' || gameType === 'pre-match'){
      this.iframeRef.nativeElement.setAttribute('src', `http://192.168.0.143:4200/1/${gameType}`)
    }
  }

  public closeDropdowns(){
    this.showTimeDropdown = false;
    this.showDecimalDropdown = false;
  }

  public toggleTimeDropdown(event: Event) {
    event.stopPropagation();
    this.showTimeDropdown = !this.showTimeDropdown;
    this.showDecimalDropdown = false;
  }

  public toggleDecimalDropdown(event: Event) {
    event.stopPropagation();
    this.showDecimalDropdown = !this.showDecimalDropdown;
    this.showTimeDropdown = false;
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
