import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'gb-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
})
export class RecoverPasswordComponent implements OnDestroy {
  @Output('openRecoverPassword') openRecoverPassword: EventEmitter<any> = new EventEmitter();
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  @Input('isMobile') isMobile: boolean = false;
  private modalElement: any;
  public tab: number = 1;

  constructor(private viewContainerRef: ViewContainerRef) {}

  public ngOnDestroy(): void {
    this.destroyModal();
  }

  public getTabValue(event: number){
    this.tab = event;
  }

  public closeRecoverPassword(event: Event) {
    if(event) this.destroyModal();
  }

  public closeModal() {
    this.destroyModal();
  }

  public openModal() {
    this.openRecoverPassword.emit(true)
    this.createModal();
  }

  public createModal() {
    this.modalElement = this.viewContainerRef?.createEmbeddedView(
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

  public destroyModal() {
    if (document.body.contains(this.modalElement?.rootNodes?.[0])) {
      document.body.removeChild(this.modalElement.rootNodes[0]);
    }
  }
}
