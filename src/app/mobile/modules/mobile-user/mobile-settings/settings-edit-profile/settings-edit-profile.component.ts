import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-edit-profile',
  templateUrl: './settings-edit-profile.component.html',
  styleUrl: './settings-edit-profile.component.scss',
})
export class SettingsEditProfileComponent implements OnInit {
  public selectedTab: 'profile_info' | 'notifications' | 'protection' =
    'profile_info';
  public isLoading = false;

  constructor() {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public onSaveChange() {}

  public selectTab(tab: 'profile_info' | 'notifications' | 'protection') {
    this.selectedTab = tab;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
