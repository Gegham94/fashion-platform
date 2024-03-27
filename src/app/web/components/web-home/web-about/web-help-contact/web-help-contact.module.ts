import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebHelpContactComponent } from './web-help-contact.component';
import { WebHelpContactRoutingModule } from './web-help-contact-routing.module';

@NgModule({
  declarations: [WebHelpContactComponent],
  imports: [CommonModule, RouterModule, WebHelpContactRoutingModule],
})
export class WebHelpContactModule {}
