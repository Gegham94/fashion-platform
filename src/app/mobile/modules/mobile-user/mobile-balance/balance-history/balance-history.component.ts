import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-balance-history',
  templateUrl: './balance-history.component.html',
  styleUrls: ['./balance-history.component.scss'],
})
export class BalanceHistoryComponent {
  // @ViewChildren('iframeElement') iframeElement!: QueryList<any>;
  // onLoad(value: any, ref: any) {
  //   ref?.contentWindow?.postMessage(value.a, ref.src);
  // }

  // onClick(index: number) {
  //   const ref = this.iframeElement.toArray()[index].nativeElement;
  //   ref?.contentWindow?.postMessage(10, ref.src);
  // }
}
