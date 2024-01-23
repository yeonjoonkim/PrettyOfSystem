import { TestBed } from '@angular/core/testing';

import { ShopClientCreateAccountService } from './shop-client-create-account.service';

describe('ShopClientCreateAccountService', () => {
  let service: ShopClientCreateAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopClientCreateAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
