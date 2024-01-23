import { TestBed } from '@angular/core/testing';

import { ShopClientAccountService } from './shop-client-account.service';

describe('ShopClientAccountService', () => {
  let service: ShopClientAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopClientAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
