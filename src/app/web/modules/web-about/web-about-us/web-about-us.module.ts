import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebAboutUsComponent } from './web-about-us.component';

@NgModule({
  declarations: [WebAboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebAboutUsComponent }]),
  ],
})
export class WebAboutUsModule {}
