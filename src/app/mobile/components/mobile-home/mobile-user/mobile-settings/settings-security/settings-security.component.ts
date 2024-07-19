import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'gb-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrl: './settings-security.component.scss',
})
export class SettingsSecurityComponent implements OnInit, AfterViewInit {
  
  public selectedTab: 'verification' | 'protection' = 'verification';
  public barWidth: number = 0;
  public isLoading = false;
  private intervalId: any;

  public ngOnInit(): void {
    this.showLoader();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectTab(this.selectedTab);
    });
  }

  setProtectedProcessBar() {
    this.intervalId = setInterval(() => {
      this.barWidth += 10;
      if (this.barWidth >= 100) {
        clearInterval(this.intervalId);
      }
    }, 100);
  }

  public selectTab(tab: 'verification' | 'protection') {
    this.selectedTab = tab;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.setProtectedProcessBar();
    }, 500);
  }
}
