import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebUserComponent } from './web-user.component';

const routes: Routes = [
  {
    path: '',
    component: WebUserComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "profile",
      },
      {
        path: "profile",
        loadChildren: () => import("./web-profile/web-profile.module").then(m => m.WebProfileModule),
      },
      {
        path: "balance",
        loadChildren: () => import("./web-balance/web-balance.module").then(m => m.WebBalanceModule),
      },
      {
        path: "history",
        loadChildren: () => import("./web-history/web-history.module").then(m => m.WebHistoryModule),
      },
      {
        path: "active_bets",
        loadChildren: () => import("./web-active-bets/web-active-bets.module").then(m => m.WebActiveBetsModule),
      },
      {
        path: "bonuses",
        loadChildren: () => import("./web-bonuses/web-bonuses.module").then(m => m.WebBonusesModule),
      },
      {
        path: "messages_notifications",
        loadChildren: () => import("./web-messages-and-notifications/web-messages-and-notifications.module").then((m) => m.WebMessagesAndNotificationsModule),
      },
      {
        path: "settings",
        loadChildren: () => import("./web-settings/web-settings.module").then((m) => m.WebSettingsModule),
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebUserRoutingModule {}
