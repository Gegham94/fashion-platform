import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileMessagesAndNotificationsComponent } from './mobile-messages-and-notifications.component';
import { MobileMessagesAndNotificationsRoutingModule } from './mobile-messages-and-notifications-routing.module';

@NgModule({
  declarations: [
    MobileMessagesAndNotificationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MobileMessagesAndNotificationsRoutingModule,
  ],
})
export class MobileMessagesAndNotificationsModule {}
