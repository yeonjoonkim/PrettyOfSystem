import { TestBed } from '@angular/core/testing';

import { ShopClientEditAccountService } from './shop-client-edit-account.service';

describe('ShopClientEditAccountService', () => {
  let service: ShopClientEditAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopClientEditAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
