import { TestBed } from '@angular/core/testing';

import { ShopPackagePopoverService } from './shop-package-popover.service';

describe('ShopPackagePopoverService', () => {
  let service: ShopPackagePopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackagePopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
