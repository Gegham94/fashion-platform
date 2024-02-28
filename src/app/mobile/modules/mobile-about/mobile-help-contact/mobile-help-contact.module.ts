import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileHelpContactComponent } from './mobile-help-contact.component';
import { MobileHelpContactRoutingModule } from './mobile-help-contact-routing.module';

@NgModule({
  declarations: [MobileHelpContactComponent],
  imports: [CommonModule, RouterModule, MobileHelpContactRoutingModule],
})
export class WebHelpContactModule {}
