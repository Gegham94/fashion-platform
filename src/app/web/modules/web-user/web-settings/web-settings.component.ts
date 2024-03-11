import { Component } from '@angular/core';
import { UserPlatformSettings } from 'src/app/shared/constants/user-platform-settings';

@Component({
  selector: 'app-web-settings',
  templateUrl: './web-settings.component.html',
  styleUrls: ['./web-settings.component.scss']
})
export class WebSettingsComponent {
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
