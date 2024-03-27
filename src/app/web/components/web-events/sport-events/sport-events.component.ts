import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gb-sport-events',
  templateUrl: './sport-events.component.html',
  styleUrls: ['./sport-events.component.scss'],
})
export class SportEventsComponent {
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  public sendDataToParent() {
    this.iframeRef.nativeElement.contentWindow.postMessage(
      { id: 1 },
      'http://192.168.0.143:4200/recommendedSportEvents'
    );
  }
}
