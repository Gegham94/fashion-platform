import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeComponent } from './mobile-home.component';
import { MobileHomeRoutingModule } from './mobile-home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileAuthModule } from '../mobile-auth/mobile-auth.module';

@NgModule({
  declarations: [MobileHomeComponent],
  imports: [CommonModule, SharedModule, MobileAuthModule, MobileHomeRoutingModule],
})
export class MobileHomeModule {}
