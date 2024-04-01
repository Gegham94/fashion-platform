import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gb-live-casino-events',
  templateUrl: './live-casino-events.component.html',
  styleUrls: ['./live-casino-events.component.scss'],
})
export class LiveCasinoEventsComponent implements OnInit {
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  public isLoading: boolean = false;

  public ngOnInit(){
    this.isLoading = true;
  }

  public frameLoadEnd(){
    this.isLoading = false
  }
  
  public sendDataToParent() {
    this.iframeRef.nativeElement.contentWindow.postMessage(
      { id: 1 },
      'http://192.168.0.117:4200/liveCasinoEvents'
    );
  }
}
