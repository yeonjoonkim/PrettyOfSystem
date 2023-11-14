import { TestBed } from '@angular/core/testing';

import { ShopScheduleTimeService } from './shop-schedule-time.service';

describe('ShopScheduleTimeService', () => {
  let service: ShopScheduleTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopScheduleTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
