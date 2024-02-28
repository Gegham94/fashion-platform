import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsEditProfileComponent } from './settings-edit-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileProfileFormComponent } from 'src/app/mobile/components/mobile-profile-form/mobile-profile-form.component';

@NgModule({
  declarations: [SettingsEditProfileComponent,],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsEditProfileComponent,
      },
    ]),
    MobileProfileFormComponent,
  ],
})
export class SettingsEditProfileModule {}
