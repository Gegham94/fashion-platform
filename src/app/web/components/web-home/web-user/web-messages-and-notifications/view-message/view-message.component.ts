import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gb-view-message',
  templateUrl: './view-message.component.html',
  styleUrl: './view-message.component.scss',
})
export class ViewMessageComponent implements OnInit {
  @Input('message') message: any = null;

  public ngOnInit() {}

  public replyMessage() {}
}
