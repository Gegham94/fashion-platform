import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsEditProfileComponent } from './settings-edit-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
  ],
})
export class SettingsEditProfileModule {}
