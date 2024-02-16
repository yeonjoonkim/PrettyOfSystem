import { TestBed } from '@angular/core/testing';

import { ShopReservationSchedulerService } from './shop-reservation-scheduler.service';

describe('ShopReservationSchedulerService', () => {
  let service: ShopReservationSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
