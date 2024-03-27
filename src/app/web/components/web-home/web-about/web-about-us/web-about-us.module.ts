import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebAboutUsComponent } from './web-about-us.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WebAboutUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: WebAboutUsComponent }]),
  ],
})
export class WebAboutUsModule {}
