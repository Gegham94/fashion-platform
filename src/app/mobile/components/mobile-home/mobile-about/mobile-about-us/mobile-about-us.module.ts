import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileAboutUsComponent } from './mobile-about-us.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobileAboutUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MobileAboutUsComponent }]),
  ],
})
export class MobileAboutUsModule {}
