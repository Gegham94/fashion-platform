import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-other',
  templateUrl: './settings-other.component.html',
  styleUrl: './settings-other.component.scss'
})
export class SettingsOtherComponent implements OnInit, AfterViewInit {
  public selectedTab: 'self_exclusion' | 'bet_deposit_limits' = 'self_exclusion';
  public isLoading = false;

  public ngOnInit(): void {
    this.showLoader();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectTab(this.selectedTab);
    });
  }

  public selectTab(tab: 'self_exclusion' | 'bet_deposit_limits') {
    this.selectedTab = tab;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
