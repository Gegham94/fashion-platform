import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileUserComponent } from './mobile-user.component';
import { MobileUserRoutingModule } from './mobile-user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobileUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    MobileUserRoutingModule
  ],
  exports:[MobileUserComponent]
})
export class MobileUserModule { }
