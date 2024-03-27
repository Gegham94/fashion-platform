import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gb-settings-other',
  templateUrl: './settings-other.component.html',
  styleUrl: './settings-other.component.scss'
})
export class SettingsOtherComponent implements OnInit {
  public isLoading = false;

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
