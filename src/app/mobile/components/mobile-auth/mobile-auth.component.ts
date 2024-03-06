import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-auth',
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
