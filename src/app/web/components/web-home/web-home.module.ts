import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHomeComponent } from './web-home.component';
import { WebHomeRoutingModule } from './web-home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebAuthModule } from '../web-auth/web-auth.module';

@NgModule({
  declarations: [WebHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    WebAuthModule,
    WebHomeRoutingModule,
  ],
})
export class WebHomeModule {}
