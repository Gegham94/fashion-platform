import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAuthComponent } from './web-auth.component';
import { WebFormsModalComponent } from './web-forms-modal/web-forms-modal.component';
import { WebSignInComponent } from '../web-sign-in/web-sign-in.component';
import { WebSignUpComponent } from '../web-sign-up/web-sign-up.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WebAuthComponent,
    WebFormsModalComponent,
    WebSignInComponent,
    WebSignUpComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [WebAuthComponent, WebFormsModalComponent],
})
export class WebAuthModule {}
