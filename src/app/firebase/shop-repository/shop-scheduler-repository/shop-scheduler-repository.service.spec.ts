import { TestBed } from '@angular/core/testing';

import { ShopSchedulerRepositoryService } from './shop-scheduler-repository.service';

describe('ShopSchedulerRepositoryService', () => {
  let service: ShopSchedulerRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSchedulerRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
