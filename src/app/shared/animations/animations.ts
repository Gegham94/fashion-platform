import { style, transition, animate, trigger } from '@angular/animations';

export const collapse = trigger('collapse', [
  transition('void => *', [
    style({ height: '0' }),
    animate('0.1s ease-in-out', style({ height: '*' })),
  ]),
  transition('* => void', [
    style({ height: '*' }),
    animate('0.1s ease-in-out', style({ height: '0' })),
  ]),
]);