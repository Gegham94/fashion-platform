import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewMessageComponent } from './new-message.component';

@NgModule({
  declarations: [NewMessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewMessageComponent,
      },
    ]),
  ],
})
export class NewMessageModule {}
