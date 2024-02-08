import { TestBed } from '@angular/core/testing';

import { ShopEmployeeAddBreakService } from './shop-employee-add-break.service';

describe('ShopEmployeeAddBreakService', () => {
  let service: ShopEmployeeAddBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeAddBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
