import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gb-slot-games-active-bets',
  templateUrl: './slot-games-active-bets.component.html',
  styleUrls: ['./slot-games-active-bets.component.scss']
})
export class SlotGamesActiveBetsComponent implements OnInit {
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
      'http://192.168.0.143:4200/slotGames'
    );
  }
}
