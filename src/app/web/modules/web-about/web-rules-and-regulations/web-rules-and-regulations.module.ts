import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebRulesAndRegulationsComponent } from './web-rules-and-regulations.component';

@NgModule({
  declarations: [WebRulesAndRegulationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WebRulesAndRegulationsComponent },
    ]),
  ],
})
export class WebRulesAndRegulationsModule {}
