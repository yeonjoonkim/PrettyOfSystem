import { Injectable } from '@angular/core';
import { DeviceAddressService } from './device-address/device-address.service';
import { DeviceTypeService } from './device-type/device-type.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(
    public address: DeviceAddressService,
    public type: DeviceTypeService
  ) {}
}
