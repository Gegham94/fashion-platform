import { Component, ComponentRef, ElementRef, HostBinding, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { PlasticCardComponent } from '../../cards/plastic-card/plastic-card.component';

@Component({
  selector: 'gb-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.scss'
})
export class CardCarouselComponent {
  @ViewChild('carouselRef', { static: true }) carouselRef!: ElementRef<any>;
  public data: any[] = [];
  public pagination: boolean = false;
  private isAnimate: boolean = false;
  private isMobile: boolean = false;

  private prevX = 0;
  private canClick = true;
  private interval: any = null;
  private isDragged = new BehaviorSubject<boolean>(false);
  private componentRef!: ComponentRef<any>;

  public activeIndex: number = 0;

  @HostBinding('class.dispaly')
  get setDispaly() {
    return this.data.length === 2;
  }

  constructor(
    private carouselService: CarouselService,
    private renderer: Renderer2,
    public viewContainerRef: ViewContainerRef
  ) {}

  public ngOnInit() {
    this.data = this.carouselService.getCarouselData().data;
    this.isMobile = this.carouselService.getCarouselData().isMobile;
    this.isAnimate = this.carouselService.getCarouselData().isAnimate;
    this.pagination = this.carouselService.getCarouselData().pagination;
    this.createInitialElements();
    this.isAnimate && this.animationScroll();
  }

  private replaceElements(direction: 'left' | 'right') {
    if (!this.canClick) return;
    this.canClick = false;
    setTimeout(() => {
      this.canClick = true;
    }, 500);

    const carousel = this.carouselRef.nativeElement;
    const first = carousel.childNodes[0];
    const center = carousel.childNodes[1];
    const last = carousel.childNodes[2];

    if (direction === 'left') {
      this.activeIndex =
        Math.abs(this.activeIndex) >= this.data.length - 1
          ? 0
          : this.activeIndex + 1;
      const option =
        this.data[(this.data.length + this.activeIndex + 1) % this.data.length];

      const div = this.createElement(['last'], option);

      this.renderer.addClass(first, 'out');
      setTimeout(() => {
        this.renderer.removeChild(carousel, first);
      }, 490);

      this.renderer.appendChild(carousel, div);
      this.renderer.removeClass(center, 'center');
      this.renderer.addClass(center, 'first');
      this.renderer.removeClass(last, 'last');
      this.renderer.addClass(last, 'center');
    } else {
      this.activeIndex =
        0 >= Math.abs(this.activeIndex)
          ? this.data.length - 1
          : this.activeIndex - 1;
      const index =
        (this.activeIndex + this.data.length - 1) % this.data.length;
      const option = this.data[index];
      const div = this.createElement(['first'], option);

      this.renderer.addClass(last, 'out');
      setTimeout(() => {
        this.renderer.removeChild(carousel, last);
      }, 490);

      this.renderer.removeClass(first, 'first');
      this.renderer.addClass(first, 'center');
      this.renderer.insertBefore(carousel, div, carousel.firstChild);
      this.renderer.removeClass(center, 'center');
      this.renderer.addClass(center, 'last');
    }
  }

  private createElement(classNames: string[], option: any) {
    const div = this.renderer.createElement('div');
    div.classList.add('carousel_item');
    classNames.forEach((className: string) => div.classList.add(className));
    this.componentRef =
      this.viewContainerRef.createComponent(PlasticCardComponent);
    if (this.isMobile) {
      div.classList.add('mobile-width');
      this.componentRef.instance.isMobile = this.isMobile;
    }

    this.componentRef.instance.option = option;
    div.appendChild(this.componentRef.location.nativeElement);
    return div;
  }

  private createInitialElements() {
    const classSets: { [key: number]: string[] } = {
      0: ['first'],
      1: ['center'],
      2: ['last'],
    };

    let arr = this.data
      .slice(this.data.length - 1)
      .concat(this.data.slice(0, 2));
    for (let i = 0; i < arr.length; i++) {
      const option = arr[i];
      const target = this.createElement(classSets[i] || [], option);
      this.renderer.appendChild(this.carouselRef.nativeElement, target);
    }
  }

  onMouseMove(event: MouseEvent) {
    if (this.data.length === 1) return;
    if (this.isDragged.value) {
      const deltaX = event.clientX - this.prevX;
      if (deltaX > 5) {
        this.replaceElements('right');
        this.renderer.removeClass(this.carouselRef.nativeElement, 'onLeft');
        this.renderer.addClass(this.carouselRef.nativeElement, 'onRight');
      } else if (deltaX <= -5) {
        this.replaceElements('left');
        this.renderer.removeClass(this.carouselRef.nativeElement, 'onRight');
        this.renderer.addClass(this.carouselRef.nativeElement, 'onLeft');
      }
      this.prevX = event.clientX;
    }
  }

  onMouseDown(event: MouseEvent) {
    this.carouselRef.nativeElement.style.cursor = 'grabbing';
    this.prevX = event.clientX;
    this.isDragged.next(true);
  }

  onMouseUp(event: MouseEvent) {
    this.prevX = 0;
    this.isDragged.next(false);
    this.carouselRef.nativeElement.style.cursor = 'default';
  }

  onMouseLeave(event: MouseEvent) {
    this.prevX = 0;
    this.isDragged.next(false);
    this.carouselRef.nativeElement.style.cursor = 'default';
  }

  onTouchMove(event: TouchEvent) {
    if (this.isDragged.value && event.touches[0]) {
      const deltaX = event.touches[0].clientX - this.prevX;

      if (deltaX > 10) {
        this.replaceElements('right');
        this.renderer.removeClass(this.carouselRef.nativeElement, 'onLeft');
        this.renderer.addClass(this.carouselRef.nativeElement, 'onRight');
      } else if (deltaX <= -10) {
        this.replaceElements('left');
        this.renderer.removeClass(this.carouselRef.nativeElement, 'onRight');
        this.renderer.addClass(this.carouselRef.nativeElement, 'onLeft');
      }

      this.prevX = event.touches[0].clientX;
    }
  }

  onTouchStart(event: TouchEvent) {
    if (event.touches.length > 0) {
      this.carouselRef.nativeElement.style.cursor = 'grabbing';
      this.prevX = event.touches[0].clientX;
      this.isDragged.next(true);
    }
  }

  onTouchEnd(event: TouchEvent) {
    this.prevX = 0;
    this.isDragged.next(false);
  }

  onMouseWheel(event: any) {
    if (event.shiftKey) {
      if (event.deltaY >= 100) {
        this.replaceElements('left');
      } else if (event.deltaY <= -100) {
        this.replaceElements('right');
      }
    }
  }

  private animationScroll() {
    this.isDragged.subscribe((isDragged: boolean) => {
      if (isDragged) {
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }
      } else {
        if (!this.interval) {
          this.interval = setInterval(() => {
            this.replaceElements('left');
          }, 4000);
        }
      }
    });
  }

  onChangePagination(i: number) {
    if (!this.canClick) return;
    this.isDragged.next(true);

    this.canClick = false;
    setTimeout(() => {
      this.canClick = true;
      this.isDragged.next(false);
    }, 500);

    const direction = this.activeIndex < i ? 'last' : 'first';
    this.activeIndex = i;

    const carousel = this.carouselRef.nativeElement;
    const first = carousel.childNodes[0];
    const center = carousel.childNodes[1];
    const last = carousel.childNodes[2];

    if (direction === 'last') {
      const divFirst = this.createElement(
        ['center'],
        this.data[(this.data.length + i - 1) % this.data.length]
      );
      const divCenter = this.createElement(
        ['last'],
        this.data[(this.data.length + i) % this.data.length]
      );
      const divLast = this.createElement(
        ['last'],
        this.data[(this.data.length + i + 1) % this.data.length]
      );

      this.renderer.removeChild(carousel, first);
      this.renderer.removeChild(carousel, center);
      this.renderer.removeChild(carousel, last);

      this.renderer.appendChild(carousel, divFirst);
      this.renderer.appendChild(carousel, divCenter);
      this.renderer.appendChild(carousel, divLast);

      setTimeout(() => {
        this.renderer.removeClass(divFirst, 'center');
        this.renderer.removeClass(divCenter, 'last');
        this.renderer.removeClass(divLast, 'last');

        this.renderer.addClass(divFirst, 'first');
        this.renderer.addClass(divCenter, 'center');
        this.renderer.addClass(divLast, 'last');
      }, 0);
    } else {
      const divFirst = this.createElement(
        ['first'],
        this.data[(this.data.length + i - 1) % this.data.length]
      );
      const divCenter = this.createElement(
        ['first'],
        this.data[(this.data.length + i) % this.data.length]
      );
      const divLast = this.createElement(
        ['center'],
        this.data[(this.data.length + i + 1) % this.data.length]
      );

      this.renderer.removeChild(carousel, first);
      this.renderer.removeChild(carousel, center);
      this.renderer.removeChild(carousel, last);

      this.renderer.appendChild(carousel, divFirst);
      this.renderer.appendChild(carousel, divCenter);
      this.renderer.appendChild(carousel, divLast);

      setTimeout(() => {
        this.renderer.removeClass(divFirst, 'first');
        this.renderer.removeClass(divCenter, 'first');
        this.renderer.removeClass(divLast, 'center');

        this.renderer.addClass(divFirst, 'first');
        this.renderer.addClass(divCenter, 'center');
        this.renderer.addClass(divLast, 'last');
      }, 0);
    }
  }
}
