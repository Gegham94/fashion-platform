import { Component } from '@angular/core';

@Component({
  selector: 'gb-mobile-about-us',
  templateUrl: './mobile-about-us.component.html',
  styleUrl: './mobile-about-us.component.scss',
})
export class MobileAboutUsComponent {
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
