import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-forms-modal',
  templateUrl: './forms-modal.component.html',
  styleUrl: './forms-modal.component.scss',
})
export class FormsModalComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  @Input('formType') formType: string = '';
  @Input('title') title: string = '';
  @Input('isMobile') isMobile: boolean = false;
  private modalElement: any;

  constructor(private viewContainerRef: ViewContainerRef) {}
  
  public ngOnDestroy(): void {
    this.destroyModal();
  }

  public isRegistered(event: Event) {
    if (event) this.destroyModal();
  }

  public isRecoverPassword(event: Event) {
    if (event) this.destroyModal();
  }

  public closeModal() {
    this.destroyModal();
  }

  public openModal() {
    this.createModal();
  }

  public createModal() {
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

  public destroyModal() {
    if (document.body.contains(this.modalElement?.rootNodes?.[0])) {
      document.body.removeChild(this.modalElement.rootNodes[0]);
    }
  }
}
