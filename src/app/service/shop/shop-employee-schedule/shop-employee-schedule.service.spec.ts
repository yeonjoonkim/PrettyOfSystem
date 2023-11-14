import { TestBed } from '@angular/core/testing';

import { ShopEmployeeScheduleService } from './shop-employee-schedule.service';

describe('ShopEmployeeScheduleService', () => {
  let service: ShopEmployeeScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
