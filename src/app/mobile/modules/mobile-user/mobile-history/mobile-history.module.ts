import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileHistoryComponent } from './mobile-history.component';
import { MobileHistoryRoutingModule } from './mobile-history-routing.module';

@NgModule({
  declarations: [MobileHistoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    MobileHistoryRoutingModule
  ],
  exports: [MobileHistoryComponent],
})
export class MobileHistoryModule {}
