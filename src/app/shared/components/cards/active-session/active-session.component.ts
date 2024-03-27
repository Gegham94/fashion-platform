import { Component } from '@angular/core';

@Component({
  selector: 'gb-active-session',
  templateUrl: './active-session.component.html',
  styleUrl: './active-session.component.scss',
})
export class ActiveSessionComponent {

  public data = [
    {
      devicetype: 'MacOS, Chrome',
      date: '12/12/2023',
      time: '2:40 PM',
      location: 'Japan, Osaka',
      ipAddress: '130.192.648.20',
      status: 'Active'
    },
    {
      devicetype: 'Windows, Chrome',
      date: '12/12/2023',
      time: '2:40 PM',
      location: 'Japan, Osaka',
      ipAddress: '130.192.648.20',
      status: 'Active'
    },
    {
      devicetype: 'Windows, Firefox',
      date: '12/12/2023',
      time: '2:40 PM',
      location: 'Japan, Osaka',
      ipAddress: '130.192.648.20',
      status: 'Active'
    },
    {
      devicetype: 'MacOS, Safari',
      date: '12/12/2023',
      time: '2:40 PM',
      location: 'Japan, Osaka',
      ipAddress: '130.192.648.20',
      status: 'Active'
    },
    {
      devicetype: 'MacOS, Chrome',
      date: '12/12/2023',
      time: '2:40 PM',
      location: 'Japan, Osaka',
      ipAddress: '130.192.648.20',
      status: 'Active'
    },
    {
      devicetype: 'MacOS, Opera',
      date: '12/12/2023',
      time: '2:40 PM',
      location: 'Japan, Osaka',
      ipAddress: '130.192.648.20',
      status: 'Active'
    },
  ];

  public onRemoveSession() {
    
  }
}
