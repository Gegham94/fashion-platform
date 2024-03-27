import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebMessagesAndNotificationsComponent } from './web-messages-and-notifications.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListMessageComponent } from './list-message/list-message.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { ViewMessageComponent } from './view-message/view-message.component';

@NgModule({
  declarations: [
    WebMessagesAndNotificationsComponent,
    ListMessageComponent,
    NewMessageComponent,
    ViewMessageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebMessagesAndNotificationsComponent,
      },
    ]),
  ],
  exports: [WebMessagesAndNotificationsComponent],
})
export class WebMessagesAndNotificationsModule {}
