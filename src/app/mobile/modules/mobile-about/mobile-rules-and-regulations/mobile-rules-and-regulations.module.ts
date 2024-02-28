import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileRulesAndRegulationsComponent } from './mobile-rules-and-regulations.component';

@NgModule({
  declarations: [MobileRulesAndRegulationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MobileRulesAndRegulationsComponent },
    ]),
  ],
})
export class MobileRulesAndRegulationsModule {}
