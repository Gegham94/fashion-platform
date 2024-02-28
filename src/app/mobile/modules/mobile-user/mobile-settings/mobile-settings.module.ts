import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileSettingsComponent } from './mobile-settings.component';
import { MobileSettingsRoutingModule } from './mobile-settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobileSettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MobileSettingsRoutingModule,
  ],
  exports: [MobileSettingsComponent],
})
export class MobileSettingsModule {}
