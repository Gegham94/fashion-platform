import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { EDeviceNumber } from './shared/enum/EDeviceNumber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Cinco.Front.FashionPlatform';

  constructor(
    private router: Router,
    private deviceDetectorService: DeviceDetectorService
  ) {}

  ngOnInit() {
    this.router.navigate([
      EDeviceNumber[this.deviceDetectorService.deviceType],
    ]);
  }
}
