import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TYPE_FILTER, STATUS, BET_TYPE, CURRENCY } from 'src/app/shared/constants/filters';

@Component({
  selector: 'app-web-active-bets',
  templateUrl: './web-active-bets.component.html',
  styleUrls: ['./web-active-bets.component.scss'],
})
export class WebActiveBetsComponent implements OnInit, OnDestroy {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  private modalElement: any;
  public status: TYPE_FILTER[] = STATUS;
  public betType: TYPE_FILTER[] = BET_TYPE;
  public currency: TYPE_FILTER[] = CURRENCY;
  public isLoading = false;

  public filterForm = {
    from: [],
    to: [],
    status: [],
    betType: [],
    currency: [],
  };
  constructor(private viewContainerRef: ViewContainerRef) {}

  public ngOnInit(): void {
    this.showLoader();
  }

  public ngOnDestroy(): void {}

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

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  //CASH OUT MODAL
  public destroyCashOutModal() {
    if (document.body.contains(this.modalElement?.rootNodes?.[0])) {
      document.body.removeChild(this.modalElement.rootNodes[0]);
    }
  }

  public closeCashOutModal() {
    this.destroyCashOutModal();
  }

  public openCashOutModal() {
    this.createCashOutModal();
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
