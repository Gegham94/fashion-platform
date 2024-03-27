import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebHistoryComponent } from './web-history.component';

const routes: Routes = [
  {
    path: '',
    component: WebHistoryComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "sportbetting",
      },
      {
        path: "sportbetting",
        loadChildren: () => import("../../../../components/web-tables/history-sportbetting-table/history-sportbetting-table.module").then(m => m.HistorySportbettingTableModule),
      },
      {
        path: "casino",
        loadChildren: () => import("../../../../components/web-tables/history-casino-table/history-casino-table.module").then(m => m.HistoryCasinoTableModule),
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebHistoryRoutingModule {}
