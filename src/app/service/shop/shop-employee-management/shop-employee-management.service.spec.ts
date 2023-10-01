import { TestBed } from '@angular/core/testing';

import { ShopEmployeeManagementService } from './shop-employee-management.service';

describe('ShopEmployeeManagementService', () => {
  let service: ShopEmployeeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
