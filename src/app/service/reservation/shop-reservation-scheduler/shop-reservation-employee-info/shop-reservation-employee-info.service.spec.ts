import { TestBed } from '@angular/core/testing';

import { ShopReservationEmployeeInfoService } from './shop-reservation-employee-info.service';

describe('ShopReservationEmployeeInfoService', () => {
  let service: ShopReservationEmployeeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationEmployeeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
