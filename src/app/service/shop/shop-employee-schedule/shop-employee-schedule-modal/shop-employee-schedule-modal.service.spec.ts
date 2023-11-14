import { TestBed } from '@angular/core/testing';

import { ShopEmployeeScheduleModalService } from './shop-employee-schedule-modal.service';

describe('ShopEmployeeScheduleModalService', () => {
  let service: ShopEmployeeScheduleModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopEmployeeScheduleModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
