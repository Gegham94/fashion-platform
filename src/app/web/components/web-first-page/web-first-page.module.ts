import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebActionsComponent } from './web-actions/web-actions.component';
import { WebFirstPageComponent } from './web-first-page.component';
import { WebAuthModule } from '../web-auth/web-auth.module';

@NgModule({
  declarations: [
    WebFirstPageComponent,
    WebActionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebAuthModule,
    RouterModule.forChild([{ path: '', component: WebFirstPageComponent }]),
  ],
})
export class WebFirstPageModule {}
