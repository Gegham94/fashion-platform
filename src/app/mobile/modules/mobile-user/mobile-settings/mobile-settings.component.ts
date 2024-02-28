import { Component } from '@angular/core';
import { UserPlatformSettings } from 'src/app/shared/enum/EUserPlatformSettings';

@Component({
  selector: 'app-mobile-settings',
  templateUrl: './mobile-settings.component.html',
  styleUrls: ['./mobile-settings.component.scss']
})
export class MobileSettingsComponent {
  public settingsType = UserPlatformSettings;
  
  public ngOnInit(): void {
    this.settingsType[0].isActive = true;
  }
  public ngOnDestroy(): void {
    this.settingsType.forEach((tab) => (tab.isActive = false));
  }

  public selectSettingsType(tabId: number) {
    this.settingsType.forEach((tab) => (tab.isActive = false));
    this.settingsType[tabId].isActive = true;
  }
}
