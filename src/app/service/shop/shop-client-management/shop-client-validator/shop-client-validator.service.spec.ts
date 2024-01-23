import { TestBed } from '@angular/core/testing';

import { ShopClientValidatorService } from './shop-client-validator.service';

describe('ShopClientValidatorService', () => {
  let service: ShopClientValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopClientValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
