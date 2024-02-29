import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebRulesAndRegulationsComponent } from './web-rules-and-regulations.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WebRulesAndRegulationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: WebRulesAndRegulationsComponent },
    ]),
  ],
})
export class WebRulesAndRegulationsModule {}
