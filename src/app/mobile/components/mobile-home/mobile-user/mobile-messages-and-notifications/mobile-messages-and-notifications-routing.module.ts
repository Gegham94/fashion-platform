import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileMessagesAndNotificationsComponent } from './mobile-messages-and-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: MobileMessagesAndNotificationsComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "message_list",
      },
      {
        path: "message_list",
        loadChildren: () => import("./list-message/list-message.module").then(m => m.ListMessageModule)
      },
      {
        path: "new_message",
        loadChildren: () => import("./new-message/new-message.module").then(m => m.NewMessageModule)
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileMessagesAndNotificationsRoutingModule {}
