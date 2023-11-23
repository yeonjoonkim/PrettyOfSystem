import { Injectable } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
@Injectable({
  providedIn: 'root',
})
export class DeviceTypeService {
  constructor(private _detector: DeviceDetectorService) {}

  public get(): DeviceInfo {
    return this._detector.getDeviceInfo();
  }
}
