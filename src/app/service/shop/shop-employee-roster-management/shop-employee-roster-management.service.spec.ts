import { TestBed } from '@angular/core/testing';

import { ShopEmployeeRosterManagementService } from './shop-employee-roster-management.service';

describe('ShopEmployeeRosterManagementService', () => {
  let service: ShopEmployeeRosterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeRosterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
