import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebBonusesComponent } from './web-bonuses.component';
import { WebBonusesRoutingModule } from './web-bonuses-routing.module';

@NgModule({
  declarations: [WebBonusesComponent],
  imports: [CommonModule, RouterModule, WebBonusesRoutingModule],
})
export class WebBonusesModule {}
