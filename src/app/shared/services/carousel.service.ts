import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private carouselData: any[] = [];
  private isAnimate: boolean = false;
  private pagination: boolean = true;
  public isMobile: boolean = false;

  constructor() {}

  public setCarouselData(
    data: any[],
    isAnimate: boolean,
    pagination: boolean,
    isMobile: boolean
  ) {
    this.carouselData = data;
    this.isAnimate = isAnimate;
    this.pagination = pagination;
    this.isMobile = isMobile;
  }

  public getCarouselData() {
    return {
      data: this.carouselData,
      isAnimate: this.isAnimate,
      pagination: this.pagination,
      isMobile: this.isMobile,
    };
  }
}
