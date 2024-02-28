import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileContactUsComponent } from './mobile-contact-us.component';

@NgModule({
  declarations: [MobileContactUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: MobileContactUsComponent }]),
  ],
})
export class MobileContactUsModule {}
