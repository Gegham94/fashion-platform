import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.scss',
})
export class InfoItemComponent {
  @Input('item') item: any;

  @ViewChild('frameContainerRef') frameContainerRef!: ElementRef;

  public isCollapse: boolean = false;

  public collapseRow() {
    const frameContainer = this.frameContainerRef.nativeElement;
    if (frameContainer) {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        frameContainer.style.setProperty('min-height', '125px');
      } else {
        frameContainer.style.setProperty('min-height', '0px');
      }
    }
  }
}
