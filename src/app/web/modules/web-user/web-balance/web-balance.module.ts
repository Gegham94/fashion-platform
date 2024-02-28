import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebBalanceComponent } from './web-balance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WithdrawStatusComponent } from './withdraw-status/withdraw-status.component';
import { BalanceHistoryComponent } from './balance-history/balance-history.component';
import { WithdrawStatusTableComponent } from 'src/app/web/components/web-tables/withdraw-status-table/withdraw-status-table.component';
import { BalanceHistoryTableComponent } from 'src/app/web/components/web-tables/balance-history-table/balance-history-table.component';

@NgModule({
  declarations: [
    WebBalanceComponent,
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
        component: WebBalanceComponent,
      },
    ]),
  ],
  exports: [WebBalanceComponent],
})
export class WebBalanceModule {}
