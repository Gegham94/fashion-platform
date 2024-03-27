import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileSignInComponent } from '../mobile-sign-in/mobile-sign-in.component';
import { MobileSignUpComponent } from '../mobile-sign-up/mobile-sign-up.component';
import { MobileAuthComponent } from './mobile-auth.component';
import { MobileFormsModalComponent } from './mobile-forms-modal/mobile-forms-modal.component';

@NgModule({
  declarations: [
    MobileAuthComponent,
    MobileFormsModalComponent,
    MobileSignInComponent,
    MobileSignUpComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [MobileAuthComponent, MobileFormsModalComponent],
})
export class MobileAuthModule {}
