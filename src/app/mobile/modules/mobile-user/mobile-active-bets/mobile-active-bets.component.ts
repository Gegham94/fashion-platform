import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TYPE_FILTER, STATUS, METHOD, CURRENCY } from 'src/app/shared/constants/filters';

@Component({
  selector: 'app-mobile-active-bets',
  templateUrl: './mobile-active-bets.component.html',
  styleUrls: ['./mobile-active-bets.component.scss']
})
export class MobileActiveBetsComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  private modalElement: any;
  public status: TYPE_FILTER[] = STATUS;
  public method: TYPE_FILTER[] = METHOD;
  public currency: TYPE_FILTER[] = CURRENCY;
  public isLoading = false;

  public filterForm = {
    from: [],
    to: [],
    status: [],
    method: [],
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

  public onSelectMethodFilter(options: any) {
    this.filterForm.method = options;
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
