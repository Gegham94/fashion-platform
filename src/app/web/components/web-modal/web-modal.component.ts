import { Component, Input } from '@angular/core';
import { ModalSize } from 'src/app/shared/enum/EModalStyles';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-web-modal',
  templateUrl: './web-modal.component.html',
  styleUrls: ['./web-modal.component.scss'],
})
export class WebModalComponent {
  @Input('size') public size: string = 'big';

  constructor(private modalService: ModalService) {}

  public get getSize(): string {
    switch (this.size) {
      case ModalSize.SMALL:
        return 'small';
      case ModalSize.BIG:
        return 'big';
      default:
        return 'big';
    }
  }

  public closeModal() {
    this.modalService.close();
  }
}
