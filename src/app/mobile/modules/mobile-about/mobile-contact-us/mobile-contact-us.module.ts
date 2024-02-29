import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileContactUsComponent } from './mobile-contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobileContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MobileContactUsComponent }]),
  ],
})
export class MobileContactUsModule {}
