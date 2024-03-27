import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileUserComponent } from './mobile-user.component';

const routes: Routes = [
  {
    path: '',
    component: MobileUserComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "profile",
      },
      {
        path: "profile",
        loadChildren: () => import("./mobile-profile/mobile-profile.module").then(m => m.MobileProfileModule)
      },
      {
        path: "balance",
        loadChildren: () => import("./mobile-balance/mobile-balance.module").then(m => m.MobileBalanceModule)
      },
      {
        path: "history",
        loadChildren: () => import("./mobile-history/mobile-history.module").then(m => m.MobileHistoryModule)
      },
      {
        path: "active_bets",
        loadChildren: () => import("./mobile-active-bets/mobile-active-bets.module").then(m => m.MobileActiveBetsModule)
      },
      {
        path: "bonuses",
        loadChildren: () => import("./mobile-bonuses/mobile-bonuses.module").then(m => m.MobileBonusesModule)
      },
      {
        path: "messages_notifications",
        loadChildren: () => import("./mobile-messages-and-notifications/mobile-messages-and-notifications.module").then((m) => m.MobileMessagesAndNotificationsModule),
      },
      {
        path: "settings",
        loadChildren: () => import("./mobile-settings/mobile-settings.module").then((m) => m.MobileSettingsModule),
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileUserRoutingModule {}
