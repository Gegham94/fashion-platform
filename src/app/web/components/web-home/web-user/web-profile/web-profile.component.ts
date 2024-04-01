import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/shared/interfaces/IUserInfo';

@Component({
  selector: 'gb-web-profile',
  templateUrl: './web-profile.component.html',
  styleUrls: ['./web-profile.component.scss'],
})
export class WebProfileComponent implements OnInit {
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
    image: null,
    verified: true,
    api_token: '',
  };

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
