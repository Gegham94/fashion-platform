import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gb-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrl: './settings-security.component.scss',
})
export class SettingsSecurityComponent implements OnInit {
  public barWidth: number = 0;
  public isLoading = false;
  private intervalId: any;

  public ngOnInit(): void {
    this.showLoader();
  }

  setProtectedProcessBar() {
    this.intervalId = setInterval(() => {
      this.barWidth += 10;
      if (this.barWidth >= 100) {
        clearInterval(this.intervalId);
      }
    }, 100);
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.setProtectedProcessBar();
    }, 500);
  }
}
