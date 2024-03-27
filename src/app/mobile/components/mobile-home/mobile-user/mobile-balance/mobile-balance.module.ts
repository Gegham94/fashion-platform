import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileBalanceComponent } from './mobile-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WithdrawStatusComponent } from './withdraw-status/withdraw-status.component';
import { BalanceHistoryComponent } from './balance-history/balance-history.component';
import { WithdrawStatusTableComponent } from 'src/app/mobile/components/mobile-tables/withdraw-status-table/withdraw-status-table.component';
import { BalanceHistoryTableComponent } from 'src/app/mobile/components/mobile-tables/balance-history-table/balance-history-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MobileBalanceComponent,
    DepositComponent,
    WithdrawComponent,
    WithdrawStatusComponent,
    BalanceHistoryComponent,
    WithdrawStatusTableComponent,
    BalanceHistoryTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileBalanceComponent,
        data: { animation: 'balance' },
      },
    ]),
  ],
  exports: [MobileBalanceComponent],
})
export class MobileBalanceModule {}
