import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrl: './settings-security.component.scss',
})
export class SettingsSecurityComponent implements OnInit, AfterViewInit {
  
  public selectedTab: 'verification' | 'protection' = 'verification';
  public barWidth: number = 0;
  public isLoading = false;

  public ngOnInit(): void {
    this.showLoader();
    // setInterval(() => {
    //   this.barWidth += 5;
    // }, 400);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectTab(this.selectedTab);
    });
  }

  public selectTab(tab: 'verification' | 'protection') {
    this.selectedTab = tab;
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
