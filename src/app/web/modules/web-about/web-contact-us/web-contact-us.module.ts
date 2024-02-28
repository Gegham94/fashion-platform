import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebContactUsComponent } from './web-contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WebContactUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: WebContactUsComponent }]),
  ],
})
export class WebContactUsModule {}
