import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  TYPE_FILTER,
  STATUS,
  BET_TYPE,
  CURRENCY,
} from 'src/app/shared/constants/filters';
import { fadeInOut } from 'src/app/shared/animations/animations';

@Component({
  selector: 'gb-web-active-bets',
  templateUrl: './web-active-bets.component.html',
  styleUrls: ['./web-active-bets.component.scss'],
  animations: [fadeInOut],
})
export class WebActiveBetsComponent implements OnInit {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;

  private modalElement: any;
  public isLoading: boolean = false;

  public status: TYPE_FILTER[] = STATUS;
  public betType: TYPE_FILTER[] = BET_TYPE;
  public currency: TYPE_FILTER[] = CURRENCY;

  public filterForm = {
    from: [],
    to: [],
    status: [],
    betType: [],
    currency: [],
  };
  constructor(private viewContainerRef: ViewContainerRef) {}

  public ngOnInit(): void {
    this.isLoading = true;
  }

  public frameLoadEnd() {
    this.isLoading = false;
  }

  public sendDataToParent() {
    this.iframeRef.nativeElement.contentWindow.postMessage(
      { id: 1 },
      'http://192.168.0.143:4200/activeBets'
    );
  }

  public getSearchedText(event: any): void {
    console.log(event);
  }

  public onSelectDateFrom(event: any) {
    if (event.target) {
      this.filterForm.from = event.target.value;
    }
  }

  public onSelectDateTo(event: any) {
    if (event.target) {
      this.filterForm.to = event.target.value;
    }
  }

  public onSelectStatusFilter(options: any) {
    this.filterForm.status = options;
  }

  public onSelectBetTypeFilter(options: any) {
    this.filterForm.betType = options;
  }

  public onSelectCurrencyFilter(options: any) {
    this.filterForm.currency = options;
  }

  //CASH OUT MODAL
  public destroyCashOutModal() {
    if (document.body.contains(this.modalElement?.rootNodes?.[0])) {
      document.body.removeChild(this.modalElement.rootNodes[0]);
    }
  }

  public createCashOutModal() {
    this.modalElement = this.viewContainerRef.createEmbeddedView(
      this.modalTemplate
    );
    document.body.appendChild(this.modalElement.rootNodes[0]);
    const popup = this.modalElement.rootNodes[0];
    popup.style.setProperty('position', 'fixed');
    popup.style.setProperty('top', '0px');
    popup.style.setProperty('left', '0px');
    popup.style.setProperty('height', '100%');
    popup.style.setProperty('width', '100%');
  }
}
