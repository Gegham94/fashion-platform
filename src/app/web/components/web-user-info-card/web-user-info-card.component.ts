import { Component, Input } from '@angular/core';
import { IUserInfo } from 'src/app/shared/interfaces/IUserInfo';

@Component({
  selector: 'app-web-user-info-card',
  templateUrl: './web-user-info-card.component.html',
  styleUrls: ['./web-user-info-card.component.scss']
})
export class UserInfoCardComponent {
  @Input('userData') userData!: IUserInfo;

  public displayNameLetters() {
    const firstNameInitial = this.userData?.firstName.charAt(0).toUpperCase();
    const lastNameInitial = this.userData?.lastName.charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }
}
