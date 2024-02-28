import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-mobile-modal',
  templateUrl: './mobile-modal.component.html',
  styleUrls: ['./mobile-modal.component.scss']
})
export class MobileModalComponent {

  constructor(
    private modalService: ModalService,
  ) {}

  public closeModal() {
    this.modalService.close();
  }
}
