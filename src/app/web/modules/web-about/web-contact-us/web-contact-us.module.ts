import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebContactUsComponent } from './web-contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WebContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: WebContactUsComponent }]),
  ],
})
export class WebContactUsModule {}
