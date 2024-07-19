import {
  Component,
  Input,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { fadeInOut } from 'src/app/shared/animations/animations'

@Component({
  selector: 'gb-attach-new-card',
  templateUrl: './attach-new-card.component.html',
  styleUrl: './attach-new-card.component.scss',
  animations: [fadeInOut]
})
export class AttachNewCardComponent implements OnDestroy {
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

  public closeAttachNewCard(event: Event) {
    if(event) this.destroyModal();
  }

  public closeModal() {
    this.destroyModal();
    this.tab = 1;
  }

  public openModal() {
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
