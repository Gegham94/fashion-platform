import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebAboutComponent } from './web-about.component';
import { WebAboutRoutingModule } from './web-about-routing.module';

@NgModule({
  declarations: [WebAboutComponent],
  imports: [CommonModule, SharedModule, WebAboutRoutingModule],
})
export class WebAboutModule {}
