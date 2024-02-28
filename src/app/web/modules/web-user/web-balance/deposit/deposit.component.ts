import { Component } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  public selectedItem: any;

  constructor() {}

  public ngOnInit(): void { }

  public getSelectedValue(event: any) {
    this.selectedItem = event;
  }
}
