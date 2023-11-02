import { TestBed } from '@angular/core/testing';

import { ShopCouponPriceCalculationService } from './shop-coupon-price-calculation.service';

describe('ShopCouponPriceCalculationService', () => {
  let service: ShopCouponPriceCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCouponPriceCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
