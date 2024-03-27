import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gb-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrl: './settings-security.component.scss',
})
export class SettingsSecurityComponent implements OnInit {
  public barWidth: number = 0;
  public isLoading = false;

  public ngOnInit(): void {
    this.showLoader()
    // setInterval(() => {
    //   this.barWidth += 5;
    // }, 400);
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
