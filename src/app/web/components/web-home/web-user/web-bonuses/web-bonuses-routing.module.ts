import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebBonusesComponent } from './web-bonuses.component';

const routes: Routes = [
  {
    path: '',
    component: WebBonusesComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "bonuses",
      },
      {
        path: "bonuses",
        loadChildren: () => import("../../../../../shared/modules/carousel/carousel.module").then(m => m.CarouselModule),
      },
      {
        path: "active_bonuses",
        loadChildren: () => import("../../../../components/web-tables/active-bonuses-table/active-bonuses-table.module").then(m => m.ActiveBonusesTableModule),
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebBonusesRoutingModule {}
