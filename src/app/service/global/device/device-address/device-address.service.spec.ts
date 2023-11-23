import { TestBed } from '@angular/core/testing';

import { DeviceAddressService } from './device-address.service';

describe('DeviceAddressService', () => {
  let service: DeviceAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
