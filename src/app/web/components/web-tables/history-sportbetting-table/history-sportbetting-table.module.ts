import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HistorySportbettingTableComponent } from 'src/app/web/components/web-tables/history-sportbetting-table/history-sportbetting-table.component';
import { TableRowComponent } from 'src/app/web/components/web-tables/history-sportbetting-table/table-row/table-row.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
