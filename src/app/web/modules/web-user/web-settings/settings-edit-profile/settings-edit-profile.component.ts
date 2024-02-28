import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-edit-profile',
  templateUrl: './settings-edit-profile.component.html',
  styleUrl: './settings-edit-profile.component.scss',
})
export class SettingsEditProfileComponent implements OnInit {
  public isLoading = false;

  constructor() {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public onSaveChange() {}

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
