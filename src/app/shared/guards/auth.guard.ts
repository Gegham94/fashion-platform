import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EDeviceNumber } from '../constants/device-number';
import { DeviceDetectorService } from 'ngx-device-detector';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const deviceDetectorService = inject(DeviceDetectorService);
  const device = EDeviceNumber[deviceDetectorService.deviceType];
  // router.navigate([`${device}/home`]);
  // return false;
  return true;
};
