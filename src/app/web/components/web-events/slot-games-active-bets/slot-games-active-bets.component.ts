import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gb-slot-games-active-bets',
  templateUrl: './slot-games-active-bets.component.html',
  styleUrls: ['./slot-games-active-bets.component.scss']
})
export class SlotGamesActiveBetsComponent {
  @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  public sendDataToParent() {
    this.iframeRef.nativeElement.contentWindow.postMessage(
      { id: 1 },
      'http://192.168.0.143:4200/slotGames'
    );
  }
}
