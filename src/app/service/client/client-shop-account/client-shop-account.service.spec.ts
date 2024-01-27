import { TestBed } from '@angular/core/testing';

import { ClientShopAccountService } from './client-shop-account.service';

describe('ClientShopAccountService', () => {
  let service: ClientShopAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientShopAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
