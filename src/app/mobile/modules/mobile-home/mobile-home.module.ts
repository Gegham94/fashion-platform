import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileHomeComponent } from './mobile-home.component';
import { MobileAuthComponent } from '../../components/mobile-auth/mobile-auth.component';
import { MobileActionsComponent } from '../../components/mobile-actions/mobile-actions.component';
import { MobileSignUpComponent } from '../../components/mobile-sign-up/mobile-sign-up.component';
import { MobileSignInComponent } from '../../components/mobile-sign-in/mobile-sign-in.component';
import { MobileProfileFormComponent } from '../../components/mobile-profile-form/mobile-profile-form.component';
import { MobileProfileFormStep2Component } from '../../components/mobile-profile-form-step-2/mobile-profile-form-step-2.component';
import { FormsModalComponent } from '../../components/mobile-auth/forms-modal/forms-modal.component';

@NgModule({
  declarations: [
    MobileHomeComponent,
    MobileAuthComponent,
    MobileActionsComponent,
    MobileSignUpComponent,
    MobileSignInComponent,
    FormsModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MobileHomeComponent }]),
    SharedModule,
    MobileProfileFormComponent,
    MobileProfileFormStep2Component,
  ],
})
export class MobileHomeModule {}
