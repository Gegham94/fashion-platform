import { Component } from '@angular/core';

@Component({
  selector: 'gb-mobile-auth',
  templateUrl: './mobile-auth.component.html',
  styleUrls: ['./mobile-auth.component.scss'],
})
export class MobileAuthComponent {
  public isAuthOpen: boolean = false;

  constructor() {}

  public toggleAuth(): void {
    this.isAuthOpen = !this.isAuthOpen;
  }
}
