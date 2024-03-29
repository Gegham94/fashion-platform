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

  public WALLET_OPTIONS = [88.5, 45.9, 55.05, 70.0];
  public selectedWalletOption = this.WALLET_OPTIONS[0];
  public showWalletDropdown: boolean = false;

  public DECIMAL_OPTIONS = ['Decimal', 'Decimal', 'Decimal'];
  public selectedDecimalOption = this.DECIMAL_OPTIONS[0];
  public showDecimalDropdown: boolean = false;

  constructor() {}

  @HostListener('window:blur', ['$event'])
  onWindowBlur(): void {
    this.isUserInfoOpen = false;
    this.showWalletDropdown = false;
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
    this.data.type = gametype;
    if(this.iframeRef) {
      switch(this.data.type) {
        case 'casino-games':
          this.data.value = 'slots';
          this.iframeRef.nativeElement.setAttribute('src', 'http://192.168.0.117:4200/1/slots')
          break;
        case 'sports-book':
          this.data.value = 'in-play';
          this.iframeRef.nativeElement.setAttribute('src', 'http://192.168.0.143:4200/1/in-play')
          break;
      }
    }
  }

  public setGameType(gameType: string) {
    this.data.value = gameType;
    if(this.iframeRef) {
      if(gameType === 'slots' || gameType === 'live-dealer'){
        this.iframeRef.nativeElement.setAttribute('src', `http://192.168.0.117:4200/1/${gameType}`)
      }
      if(gameType === 'in-play' || gameType === 'pre-match'){
        this.iframeRef.nativeElement.setAttribute('src', `http://192.168.0.143:4200/1/${gameType}`)
      }
    }
  }

  public closeDropdowns(){
    this.showWalletDropdown = false;
    this.showDecimalDropdown = false;
  }

  public toggleWalletDropdown(event: Event) {
    event.stopPropagation();
    this.showWalletDropdown = !this.showWalletDropdown;
    this.showDecimalDropdown = false;
  }

  public toggleDecimalDropdown(event: Event) {
    event.stopPropagation();
    this.showDecimalDropdown = !this.showDecimalDropdown;
    this.showWalletDropdown = false;
  }

  public toggleAuth(event: Event) {
    event.stopPropagation();
    this.isUserInfoOpen = !this.isUserInfoOpen;
  }
}
