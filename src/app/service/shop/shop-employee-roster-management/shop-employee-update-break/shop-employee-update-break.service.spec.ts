import { TestBed } from '@angular/core/testing';

import { ShopEmployeeUpdateBreakService } from './shop-employee-update-break.service';

describe('ShopEmployeeUpdateBreakService', () => {
  let service: ShopEmployeeUpdateBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeUpdateBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
