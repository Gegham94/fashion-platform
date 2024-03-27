import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListMessageComponent } from './list-message.component';
import { ViewMessageComponent } from './view-message/view-message.component';

@NgModule({
  declarations: [ListMessageComponent, ViewMessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListMessageComponent,
      },
    ]),
  ],
})
export class ListMessageModule {}
