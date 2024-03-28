import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebHomeComponent } from './web-home.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WebHomeComponent,
    children: [
      {
        path: 'user',loadChildren: () => import('./web-user/web-user.module').then((m) => m.WebUserModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'about',loadChildren: () =>import('./web-about/web-about.module').then((m) => m.WebAboutModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebHomeRoutingModule {}
