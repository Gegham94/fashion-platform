import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileRulesAndRegulationsComponent } from './mobile-rules-and-regulations.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobileRulesAndRegulationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: MobileRulesAndRegulationsComponent },
    ]),
  ],
})
export class MobileRulesAndRegulationsModule {}
