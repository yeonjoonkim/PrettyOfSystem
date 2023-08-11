import { TestBed } from '@angular/core/testing';

import { SystemShopWorkHoursService } from './system-shop-work-hours.service';

describe('SystemShopWorkHoursService', () => {
  let service: SystemShopWorkHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemShopWorkHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
