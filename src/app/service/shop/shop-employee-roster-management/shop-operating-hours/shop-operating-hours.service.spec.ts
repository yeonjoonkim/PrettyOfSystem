import { TestBed } from '@angular/core/testing';

import { ShopOperatingHoursService } from './shop-operating-hours.service';

describe('ShopOperatingHoursService', () => {
  let service: ShopOperatingHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopOperatingHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
