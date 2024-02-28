import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HistoryCasinoTableComponent } from './history-casino-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HistoryCasinoTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HistoryCasinoTableComponent,
      },
    ]),
  ],
})
export class HistoryCasinoTableModule {}
