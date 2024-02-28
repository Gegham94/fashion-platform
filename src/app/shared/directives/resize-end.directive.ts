import {
  Directive,
  Output,
  EventEmitter,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appResizeEnd]',
})
export class ResizeEndDirective implements OnInit, OnDestroy {
  @Input() debounceTime: number = 30;
  @Output('resizeEnd') resizeEnd = new EventEmitter<void>();
  private resizeSubscription?: Subscription;

  ngOnInit() {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(this.debounceTime))
      .subscribe(() => {
        this.resizeEnd.emit();
      });
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
