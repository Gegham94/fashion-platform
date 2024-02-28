import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileSettingsComponent } from './mobile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: MobileSettingsComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "security",
      },
      {
        path: "security",
        loadChildren: () => import("./settings-security/settings-security.module").then(m => m.SettingsSecurityModule),
      },
      {
        path: "edit_profile",
        loadChildren: () => import("./settings-edit-profile/settings-edit-profile.module").then(m => m.SettingsEditProfileModule),
      },
      {
        path: "other",
        loadChildren: () => import("./settings-other/settings-other.module").then(m => m.SettingsOtherModule),
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileSettingsRoutingModule {}
