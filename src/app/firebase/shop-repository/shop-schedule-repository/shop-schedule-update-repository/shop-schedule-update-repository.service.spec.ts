import { TestBed } from '@angular/core/testing';

import { ShopScheduleUpdateRepositoryService } from './shop-schedule-update-repository.service';

describe('ShopScheduleUpdateRepositoryService', () => {
  let service: ShopScheduleUpdateRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopScheduleUpdateRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
