import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileProfileComponent } from './mobile-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileUserInfoCardComponent } from 'src/app/mobile/components/mobile-user-info-card/mobile-user-info-card.component';
import { SportEventsComponent } from 'src/app/mobile/components/mobile-events/sport-events/sport-events.component';
import { SlotGamesActiveBetsComponent } from 'src/app/mobile/components/mobile-events/slot-games-active-bets/slot-games-active-bets.component';
import { LiveCasinoEventsComponent } from 'src/app/mobile/components/mobile-events/live-casino-events/live-casino-events.component';

@NgModule({
  declarations: [
    MobileProfileComponent,
    MobileUserInfoCardComponent,
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
        component: MobileProfileComponent,
        data: { animation: 'profile' },
      },
    ]),
  ],
  exports: [MobileProfileComponent],
})
export class MobileProfileModule {}
