import { TestBed } from '@angular/core/testing';

import { ShopDefaultSchedulerService } from './shop-default-scheduler.service';

describe('ShopDefaultSchedulerService', () => {
  let service: ShopDefaultSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopDefaultSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
