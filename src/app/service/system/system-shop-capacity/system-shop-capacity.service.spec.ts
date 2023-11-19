import { TestBed } from '@angular/core/testing';

import { SystemShopCapacityService } from './system-shop-capacity.service';

describe('SystemShopCapacityService', () => {
  let service: SystemShopCapacityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemShopCapacityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
