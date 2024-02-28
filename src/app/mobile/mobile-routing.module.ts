import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import("./modules/mobile-user/mobile-user.module").then(m => m.MobileUserModule),
      },
      {
        path: 'home',
        loadChildren: () => import("./modules/mobile-home/mobile-home.module").then(m => m.MobileHomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import("./modules/mobile-about/mobile-about.module").then(m => m.MobileAboutModule),
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
