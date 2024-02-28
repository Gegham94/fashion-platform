import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileActiveBetsComponent } from './mobile-active-bets.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobileActiveBetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileActiveBetsComponent,
        data: { animation: 'activeBets' },
      },
    ]),
  ],
  exports: [MobileActiveBetsComponent],
})
export class MobileActiveBetsModule {}
