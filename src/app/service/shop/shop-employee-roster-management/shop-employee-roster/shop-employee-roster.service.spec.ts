import { TestBed } from '@angular/core/testing';

import { ShopEmployeeRosterService } from './shop-employee-roster.service';

describe('ShopEmployeeRosterService', () => {
  let service: ShopEmployeeRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
