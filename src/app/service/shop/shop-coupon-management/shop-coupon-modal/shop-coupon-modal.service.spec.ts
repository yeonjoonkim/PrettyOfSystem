import { TestBed } from '@angular/core/testing';

import { ShopCouponModalService } from './shop-coupon-modal.service';

describe('ShopCouponModalService', () => {
  let service: ShopCouponModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCouponModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
