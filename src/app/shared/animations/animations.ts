import { style, transition, animate, trigger, state } from '@angular/animations';

export const collapse = trigger('collapse', [
  transition('void => *', [
    style({ height: '0' }),
    animate('100ms ease-in-out', style({ height: '*' })),
  ]),
  transition('* => void', [
    style({ height: '*' }),
    animate('100ms ease-in-out', style({ height: '0' })),
  ]),
]);

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void <=> *', animate('150ms ease-in-out')),
])