import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlasticCards } from 'src/app/shared/constants/plastic-cards';
import { CarouselService } from 'src/app/shared/services/carousel.service';

@Component({
  selector: 'gb-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.scss',
})
export class BankCardComponent {
  @Output('closeDepositModal') closeDepositModal: EventEmitter<any> =
    new EventEmitter();
  @Output('emitTabValue') emitTabValue: EventEmitter<any> = new EventEmitter();
  @Input('isMobile') isMobile: boolean = false;
  public data = PlasticCards;

  public readonly amountForm = new FormGroup({
    amount: new FormControl('', [
      Validators.required,
      Validators.min(200),
      Validators.max(1000),
    ]),
    rulesAndBetting: new FormControl(),
  });

  constructor(private carouselService: CarouselService){}


  public ngOnInit(): void {
    this.carouselService.setCarouselData(this.data, false, true, this.isMobile);
  }

  public onDeposit() {
    if (this.amountForm.valid) {
      this.closeDepositModal.emit(true);
    }
  }

  public handleCheckboxChange(event: any): void {
    if (event && event.target.checked) {
      event.target.parentElement?.classList.add('checked');
    } else {
      event.target.parentElement?.classList.remove('checked');
    }
  }

  public onSelectValue(properties: any) {
    this.amountForm.get('amount')?.setValue(properties.option.name);
  }
}
