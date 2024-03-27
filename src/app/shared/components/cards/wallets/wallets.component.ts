import { Component, Input } from '@angular/core';

@Component({
  selector: 'gb-wallets',
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.scss',
})
export class WalletsComponent {
  @Input('isMobile') isMobile: boolean = false;
  
  public isShowBalanceOnTop: boolean = false;
  public walletData = [
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
    { title: 'XOF West Africa CFE franc' },
  ];

  public getSelectedValue(event: any) {
  }

  public onAddWallet() {}

  public onRemoveCurrency() {}

  public showBalanceOnTop() {
    this.isShowBalanceOnTop = !this.isShowBalanceOnTop;
  }
}
