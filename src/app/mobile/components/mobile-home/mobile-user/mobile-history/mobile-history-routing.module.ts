import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileHistoryComponent } from './mobile-history.component';

const routes: Routes = [
  {
    path: '',
    component: MobileHistoryComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "sportbetting",
      },
      {
        path: "sportbetting",
        loadChildren: () => import("../../../../components/mobile-tables/history-sportbetting-table/history-sportbetting-table.module").then(m => m.HistorySportbettingTableModule),
      },
      {
        path: "casino",
        loadChildren: () => import("../../../../components/mobile-tables/history-casino-table/history-casino-table.module").then(m => m.HistoryCasinoTableModule),
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileHistoryRoutingModule {}
