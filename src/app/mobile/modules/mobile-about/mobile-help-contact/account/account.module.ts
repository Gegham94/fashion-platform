import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AccountComponent, InfoItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
      },
    ]),
  ],
})
export class AccountModule {}
