import { Component } from '@angular/core';

@Component({
  selector: 'gb-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  public selectedItem: any;
  public getSelectedValue(event: any) {
    this.selectedItem = event;
    // if (this.selectedItem.name === 'All') {
    //   this.filteredData = this.data;
    // } else {
    //   this.filteredData = this.data.filter(item => item.currency === this.selectedItem.name);
    // }
  }
}
