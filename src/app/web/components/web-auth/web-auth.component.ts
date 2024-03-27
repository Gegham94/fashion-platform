import { Component } from '@angular/core';

@Component({
  selector: 'gb-web-auth',
  templateUrl: './web-auth.component.html',
  styleUrls: ['./web-auth.component.scss'],
})
export class WebAuthComponent {
  public isAuthOpen: boolean = false;
  
  public toggleAuth(): void {
    this.isAuthOpen = !this.isAuthOpen;
  }
}
