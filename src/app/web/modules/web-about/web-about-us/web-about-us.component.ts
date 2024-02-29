import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-about-us',
  templateUrl: './web-about-us.component.html',
  styleUrl: './web-about-us.component.scss',
})
export class WebAboutUsComponent implements OnInit {
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
