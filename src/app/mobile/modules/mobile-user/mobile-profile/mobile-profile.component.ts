import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/shared/interfaces/IUserInfo';

@Component({
  selector: 'app-mobile-profile',
  templateUrl: './mobile-profile.component.html',
  styleUrls: ['./mobile-profile.component.scss'],
})
export class MobileProfileComponent implements OnInit {
  // @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  // public sendDataToParent() {
  //   this.iframeRef.nativeElement.contentWindow.postMessage(
  //     { id: 1 },
  //     'http://192.168.0.143:4200/recommendedSportEvents'
  //   );
  // }
  public isLoading = false;
  public userData: IUserInfo = {
    id: 88234560,
    firstName: 'Melanie',
    lastName: 'Wernon',
    userName: 'Username8888',
    email: 'melanie.wernon1998@gmail.com',
    phoneNumber: '374 00 000000',
    dateOfBirth: '02/20/1998',
    location: 'Armenia, 88 Hanrapetutyan Str',
    loyalPoints: '7656 / 8888',
    api_token: '',
  };

  constructor(
  ) {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
