import { TestBed } from '@angular/core/testing';

import { ShopEmployeeAccountModalService } from './shop-employee-account-modal.service';

describe('ShopEmployeeAccountModalService', () => {
  let service: ShopEmployeeAccountModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeAccountModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
