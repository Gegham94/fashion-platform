import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-web-auth',
  templateUrl: './web-auth.component.html',
  styleUrls: ['./web-auth.component.scss'],
})
export class WebAuthComponent {
  public isAuthOpen: boolean = false;
  
  public toggleAuth(): void {
    this.isAuthOpen = !this.isAuthOpen;
  }
}
