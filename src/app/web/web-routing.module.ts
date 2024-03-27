import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {path: '', redirectTo: 'first_page', pathMatch: 'full'},
      {
        path: 'first_page',
        loadChildren: () => import("./components/web-first-page/web-first-page.module").then(m => m.WebFirstPageModule),
      },
      {
        path: 'home',
        loadChildren: () => import("./components/web-home/web-home.module").then(m => m.WebHomeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutingModule {}
