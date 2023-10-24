import { TestBed } from '@angular/core/testing';

import { ShopPackagePriceCalculationService } from './shop-package-price-calculation.service';

describe('ShopPackagePriceCalculationService', () => {
  let service: ShopPackagePriceCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackagePriceCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
