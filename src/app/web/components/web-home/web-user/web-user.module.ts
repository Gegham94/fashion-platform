import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebUserComponent } from './web-user.component';
import { WebUserRoutingModule } from './web-user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WebUserComponent],
  imports: [CommonModule, SharedModule, WebUserRoutingModule],
  exports: [WebUserComponent],
})
export class WebUserModule {}
