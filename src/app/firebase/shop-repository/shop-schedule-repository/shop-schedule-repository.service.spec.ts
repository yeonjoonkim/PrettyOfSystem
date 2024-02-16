import { TestBed } from '@angular/core/testing';

import { ShopScheduleRepositoryService } from './shop-schedule-repository.service';

describe('ShopScheduleRepositoryService', () => {
  let service: ShopScheduleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopScheduleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
