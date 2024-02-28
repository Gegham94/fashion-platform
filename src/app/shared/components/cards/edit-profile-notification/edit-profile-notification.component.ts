import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-notification',
  templateUrl: './edit-profile-notification.component.html',
  styleUrl: './edit-profile-notification.component.scss',
})
export class EditProfileNotificationComponent implements OnInit {
  @Input('isMobile') isMobile: boolean = false;
  
  public readonly notificationForm = new FormGroup({
    newBonuses: new FormControl(false),
    favoriteGames: new FormControl(false),
    withdrawalStatuses: new FormControl(false),
    typeOfBet: new FormControl(false),
    bonusAchievement: new FormControl(false),
    allDepositStatuses: new FormControl(false),
    email: new FormControl(false),
    sms: new FormControl(false),
    notofocations: new FormControl(false),
    phoneCall: new FormControl(false),
  });

  public ngOnInit(): void {}

  public onSubmitChanges() {
    console.log(this.notificationForm.value);
  }

  public get newBonusesControl(): FormControl {
    return this.notificationForm.get('newBonuses') as FormControl;
  }
  public get favoriteGamesControl(): FormControl {
    return this.notificationForm.get('favoriteGames') as FormControl;
  }
  public get withdrawalStatusesControl(): FormControl {
    return this.notificationForm.get('withdrawalStatuses') as FormControl;
  }
  public get typeOfBetControl(): FormControl {
    return this.notificationForm.get('typeOfBet') as FormControl;
  }
  public get bonusAchievementControl(): FormControl {
    return this.notificationForm.get('bonusAchievement') as FormControl;
  }
  public get allDepositStatusesControl(): FormControl {
    return this.notificationForm.get('allDepositStatuses') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.notificationForm.get('email') as FormControl;
  }
  public get smsControl(): FormControl {
    return this.notificationForm.get('sms') as FormControl;
  }
  public get notificationsControl(): FormControl {
    return this.notificationForm.get('notofocations') as FormControl;
  }
  public get phoneCallControl(): FormControl {
    return this.notificationForm.get('phoneCall') as FormControl;
  }
}
