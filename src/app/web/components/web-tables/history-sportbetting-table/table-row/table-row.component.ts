import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gb-table-row',
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent implements OnInit {
  @ViewChild('frameContainerRef') frameContainerRef!: ElementRef;
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  @Input('rowData') rowData: any;

  public isCollapse: boolean = false;
  public isLoading: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public sendDataToParent() {
    this.iframeRef.nativeElement.contentWindow.postMessage(
      { id: 1 },
      'http://192.168.0.143:4200/historySportbetting'
    );
  }

  public collapseRow() {
    const frameContainer = this.frameContainerRef.nativeElement;
    if (frameContainer) {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        frameContainer.style.setProperty('min-height', '225px');
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else {
        frameContainer.style.setProperty('min-height', '0px');
        this.isLoading = false;
      }
    }
  }
}
