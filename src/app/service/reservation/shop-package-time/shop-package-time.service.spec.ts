import { TestBed } from '@angular/core/testing';

import { ShopPackageTimeService } from './shop-package-time.service';

describe('ShopPackageTimeValidatorService', () => {
  let service: ShopPackageTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackageTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
