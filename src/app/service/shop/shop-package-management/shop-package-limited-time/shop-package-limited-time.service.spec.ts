import { TestBed } from '@angular/core/testing';

import { ShopPackageLimitedTimeService } from './shop-package-limited-time.service';

describe('ShopPackageLimitedTimeService', () => {
  let service: ShopPackageLimitedTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackageLimitedTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
