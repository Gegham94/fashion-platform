import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActiveBonusesTableComponent } from './active-bonuses-table.component';

@NgModule({
  declarations: [ActiveBonusesTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActiveBonusesTableComponent,
      },
    ]),
  ],
})
export class ActiveBonusesTableModule {}
