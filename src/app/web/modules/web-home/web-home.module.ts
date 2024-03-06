import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebHomeComponent } from './web-home.component';
import { WebAuthComponent } from '../../components/web-auth/web-auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebActionsComponent } from '../../components/web-actions/web-actions.component';
import { WebSignUpComponent } from '../../components/web-sign-up/web-sign-up.component';
import { WebSignInComponent } from '../../components/web-sign-in/web-sign-in.component';
import { WebProfileFormComponent } from '../../components/web-profile-form/web-profile-form.component';
import { WebProfileFormStep2Component } from '../../components/web-profile-form-step-2/web-profile-form-step-2.component';
import { FormsModalComponent } from '../../components/web-auth/forms-modal/forms-modal.component';

@NgModule({
  declarations: [
    WebHomeComponent,
    WebAuthComponent,
    WebActionsComponent,
    WebSignUpComponent,
    WebSignInComponent,
    FormsModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebHomeComponent }]),
    SharedModule,
    WebProfileFormComponent,
    WebProfileFormStep2Component,
  ],
})
export class WebHomeModule {}
