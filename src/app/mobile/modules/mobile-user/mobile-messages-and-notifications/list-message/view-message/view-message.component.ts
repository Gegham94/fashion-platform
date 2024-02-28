import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrl: './view-message.component.scss',
})
export class ViewMessageComponent {
  @Input('message') message: any = null;
  @Input() isOpen: boolean = false;

  public toggleMessage() {
    this.isOpen = !this.isOpen;
  }
}
