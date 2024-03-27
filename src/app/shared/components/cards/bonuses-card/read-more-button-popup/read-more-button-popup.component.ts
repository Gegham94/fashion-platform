import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'gb-read-more-button-popup',
  templateUrl: './read-more-button-popup.component.html',
  styleUrl: './read-more-button-popup.component.scss',
})
export class ReadMoreButtonPopupComponent implements OnInit, OnDestroy {
  @Input('option') option: any;
  @Input('isMobile') isMobile: boolean = false;
  @ViewChild('popupTemplate') popupTemplate!: TemplateRef<any>;
  public isOpen: boolean = false;

  private popupElement: any;

  constructor(private viewContainerRef: ViewContainerRef) {}

  public ngOnInit(): void {}

  public closePopup() {
    this.isOpen = false;
    this.destroyPopup();
  }

  public openPopup() {
    this.isOpen = true;
    this.createPopup();
  }

  public createPopup() {
    this.popupElement = this.viewContainerRef.createEmbeddedView(
      this.popupTemplate
    );
    document.body.appendChild(this.popupElement.rootNodes[0]);
    const popup = this.popupElement.rootNodes[0];
    popup.style.setProperty('position', 'fixed');
    popup.style.setProperty('top', '0px');
    popup.style.setProperty('left', '0px');
    popup.style.setProperty('height', '100%');
    popup.style.setProperty('width', '100%');
  }

  public destroyPopup() {
    if (document.body.contains(this.popupElement?.rootNodes?.[0])) {
      document.body.removeChild(this.popupElement.rootNodes[0]);
    }
  }

  public ngOnDestroy(): void {
    this.destroyPopup();
  }
}
