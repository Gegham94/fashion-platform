import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import("./modules/web-user/web-user.module").then(m => m.WebUserModule),
      },
      {
        path: 'home',
        loadChildren: () => import("./modules/web-home/web-home.module").then(m => m.WebHomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import("./modules/web-about/web-about.module").then(m => m.WebAboutModule),
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
