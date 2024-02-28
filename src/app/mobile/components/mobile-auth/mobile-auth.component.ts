import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { EDeviceNumber } from 'src/app/shared/enum/EDeviceNumber';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-mobile-auth',
  templateUrl: './mobile-auth.component.html',
  styleUrls: ['./mobile-auth.component.scss'],
})
export class MobileAuthComponent {
  public display$!: Observable<true | false>;
  public isAuthOpen: boolean = false;

  public isOpenSignInModal: boolean = false;
  public isOpenSignUpModal: boolean = false;

  constructor(
    public modalService: ModalService,
    private deviceDetectorService: DeviceDetectorService
  ) {}

  public get deviceType() {
    return EDeviceNumber[this.deviceDetectorService.deviceType];
  }

  public ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }

  public toggleAuth(): void {
    this.isAuthOpen = !this.isAuthOpen;
  }

  public openModal(modalType: string) {
    switch (modalType) {
      case 'sign-in':
        this.isOpenSignInModal = true;
        this.isOpenSignUpModal = false;
        break;
      case 'sign-up':
        this.isOpenSignInModal = false;
        this.isOpenSignUpModal = true;
        break;
    }
    this.modalService.open();
  }
}
