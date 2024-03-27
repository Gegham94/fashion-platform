import { Component } from '@angular/core';
import { UserPlatformBonuses } from 'src/app/shared/constants/user-platform-bonuses';
import { CarouselService } from 'src/app/shared/services/carousel.service';

const data = [
  {
    title: '1 _ Win Bonuses by SPINING in 24 hrs!',
    subTitle: 'Available until 12/12/2024',
  },
  {
    title: '2 _ Win Bonuses by SPINING in 12 hrs!',
    subTitle: 'Available until 01/12/2024',
  },
  {
    title: '3 _ Win Bonuses by SPINING in 16 hrs!',
    subTitle: 'Available until 18/03/2024',
  },
  {
    title: '4 _ Win Bonuses by SPINING in 18 hrs!',
    subTitle: 'Available until 15/10/2024',
  },
  {
    title: '5 _ Win Bonuses by SPINING in 8 hrs!',
    subTitle: 'Available until 07/06/2023',
  },
  {
    title: '6 _ Win Bonuses by SPINING in 9 hrs!',
    subTitle: 'Available until 11/08/2022',
  },
  {
    title: '7 _ Win Bonuses by SPINING in 6 hrs!',
    subTitle: 'Available until 14/02/2024',
  },
  {
    title: '8 _ Win Bonuses by SPINING in 4 hrs!',
    subTitle: 'Available until 10/10/2023',
  },
  {
    title: '9 _ Win Bonuses by SPINING in 4 hrs!',
    subTitle: 'Available until 10/10/2023',
  },
  {
    title: '10 _ Win Bonuses by SPINING in 4 hrs!',
    subTitle: 'Available until 10/10/2023',
  },
];

@Component({
  selector: 'gb-mobile-bonuses',
  templateUrl: './mobile-bonuses.component.html',
  styleUrls: ['./mobile-bonuses.component.scss'],
})
export class MobileBonusesComponent {
  public bonusesType = UserPlatformBonuses;
  public data = data;

  constructor(private carouselService: CarouselService) {}

  public ngOnInit(): void {
    this.bonusesType[0].isActive = true;
    this.carouselService.setCarouselData(this.data, false, true, true);
  }
  public ngOnDestroy(): void {
    this.bonusesType.forEach((tab) => (tab.isActive = false));
  }

  public selectBonuseType(tabId: number) {
    this.bonusesType.forEach((tab) => (tab.isActive = false));
    this.bonusesType[tabId].isActive = true;
    this.carouselService.setCarouselData(this.data, false, true, true);
  }
}
