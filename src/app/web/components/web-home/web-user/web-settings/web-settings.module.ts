import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSettingsComponent } from './web-settings.component';
import { WebSettingsRoutingModule } from './web-settings-routing.module';

@NgModule({
  declarations: [WebSettingsComponent],
  imports: [CommonModule, WebSettingsRoutingModule],
})
export class WebSettingsModule {}
