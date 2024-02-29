import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
})
export class PaymentsComponent {
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
