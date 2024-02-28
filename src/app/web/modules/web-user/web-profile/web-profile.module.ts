import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebProfileComponent } from './web-profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserInfoCardComponent } from 'src/app/web/components/web-user-info-card/web-user-info-card.component';
import { LiveCasinoEventsComponent } from 'src/app/web/components/web-events/live-casino-events/live-casino-events.component';
import { SportEventsComponent } from 'src/app/web/components/web-events/sport-events/sport-events.component';
import { SlotGamesActiveBetsComponent } from 'src/app/web/components/web-events/slot-games-active-bets/slot-games-active-bets.component';

@NgModule({
  declarations: [
    WebProfileComponent,
    UserInfoCardComponent,
    LiveCasinoEventsComponent,
    SlotGamesActiveBetsComponent,
    SportEventsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebProfileComponent,
      },
    ]),
  ],
  exports: [WebProfileComponent],
})
export class WebProfileModule {}
