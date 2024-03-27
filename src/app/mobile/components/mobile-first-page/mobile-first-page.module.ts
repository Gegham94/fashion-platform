import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileFirstPageComponent } from './mobile-first-page.component';
import { MobileActionsComponent } from './mobile-actions/mobile-actions.component';
import { MobileAuthModule } from '../mobile-auth/mobile-auth.module';

@NgModule({
  declarations: [
    MobileFirstPageComponent,
    MobileActionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MobileAuthModule,
    RouterModule.forChild([{ path: '', component: MobileFirstPageComponent }]),
  ],
})
export class MobileFirstPageModule {}
