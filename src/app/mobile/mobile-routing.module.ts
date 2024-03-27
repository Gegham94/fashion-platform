import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    children: [
      {path: '', redirectTo: 'first_page', pathMatch: 'full'},
      {
        path: 'first_page',
        loadChildren: () => import("./components/mobile-first-page/mobile-first-page.module").then(m => m.MobileFirstPageModule),
      },
      {
        path: 'home',
        loadChildren: () => import("./components/mobile-home/mobile-home.module").then(m => m.MobileHomeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
