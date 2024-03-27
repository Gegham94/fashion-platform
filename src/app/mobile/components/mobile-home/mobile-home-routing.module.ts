import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileHomeComponent } from './mobile-home.component';

const routes: Routes = [
  {
    path: '',
    component: MobileHomeComponent,
    children: [
      {path: 'user', loadChildren: () => import('./mobile-user/mobile-user.module').then(m => m.MobileUserModule)},
      {path: 'about', loadChildren: () => import('./mobile-about/mobile-about.module').then(m => m.MobileAboutModule)},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileHomeRoutingModule {}
