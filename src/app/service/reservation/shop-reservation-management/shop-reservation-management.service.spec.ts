import { TestBed } from '@angular/core/testing';

import { ShopReservationManagementService } from './shop-reservation-management.service';

describe('ShopReservationManagementService', () => {
  let service: ShopReservationManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
