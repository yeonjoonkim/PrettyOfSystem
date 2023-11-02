import { TestBed } from '@angular/core/testing';

import { ShopCouponRepositoryService } from './shop-coupon-repository.service';

describe('ShopCouponRepositoryService', () => {
  let service: ShopCouponRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCouponRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
