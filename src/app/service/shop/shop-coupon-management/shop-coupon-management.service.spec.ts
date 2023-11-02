import { TestBed } from '@angular/core/testing';

import { ShopCouponManagementService } from './shop-coupon-management.service';

describe('ShopCouponManagementService', () => {
  let service: ShopCouponManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCouponManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
