import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistorySportbettingTableComponent } from './history-sportbetting-table.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [HistorySportbettingTableComponent, TableRowComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HistorySportbettingTableComponent,
      },
    ]),
  ],
})
export class HistorySportbettingTableModule {}
