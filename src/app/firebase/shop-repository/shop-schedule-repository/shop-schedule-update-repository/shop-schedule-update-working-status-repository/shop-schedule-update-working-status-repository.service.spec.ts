import { TestBed } from '@angular/core/testing';

import { ShopScheduleUpdateWorkingStatusRepositoryService } from './shop-schedule-update-working-status-repository.service';

describe('ShopScheduleUpdateWorkingStatusRepositoryService', () => {
  let service: ShopScheduleUpdateWorkingStatusRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopScheduleUpdateWorkingStatusRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
