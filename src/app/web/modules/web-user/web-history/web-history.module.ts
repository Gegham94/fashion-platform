import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebHistoryComponent } from './web-history.component';
import { WebHistoryRoutingModule } from './web-history-routing.module';

@NgModule({
  declarations: [WebHistoryComponent],
  imports: [CommonModule, RouterModule, WebHistoryRoutingModule],
})
export class WebHistoryModule {}
