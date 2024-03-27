import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebActiveBetsComponent } from './web-active-bets.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WebActiveBetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebActiveBetsComponent,
      },
    ]),
  ],
  exports: [WebActiveBetsComponent],
})
export class WebActiveBetsModule {}
