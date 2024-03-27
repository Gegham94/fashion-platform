import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileBonusesComponent } from './mobile-bonuses.component';
import { MobileBonusesRoutingModule } from './mobile-bonuses-routing.module';

@NgModule({
  declarations: [MobileBonusesComponent],
  imports: [CommonModule, RouterModule, MobileBonusesRoutingModule],
  exports: [MobileBonusesComponent],
})
export class MobileBonusesModule {}
