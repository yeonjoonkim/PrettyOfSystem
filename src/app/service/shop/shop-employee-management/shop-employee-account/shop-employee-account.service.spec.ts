import { TestBed } from '@angular/core/testing';

import { ShopEmployeeAccountService } from './shop-employee-account.service';

describe('ShopEmployeeAccountService', () => {
  let service: ShopEmployeeAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
