import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileAboutComponent } from './mobile-about.component';
import { MobileAboutRoutingModule } from './mobile-about-routing.module';

@NgModule({
  declarations: [MobileAboutComponent],
  imports: [CommonModule, SharedModule, MobileAboutRoutingModule],
})
export class MobileAboutModule {}
