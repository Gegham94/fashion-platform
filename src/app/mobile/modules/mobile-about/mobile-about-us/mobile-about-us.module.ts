import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileAboutUsComponent } from './mobile-about-us.component';

@NgModule({
  declarations: [MobileAboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MobileAboutUsComponent }]),
  ],
})
export class MobileAboutUsModule {}
