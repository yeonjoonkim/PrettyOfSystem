import { TestBed } from '@angular/core/testing';

import { SystemShopCapacityRepositoryService } from './system-shop-capacity-repository.service';

describe('SystemShopCapacityService', () => {
  let service: SystemShopCapacityRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemShopCapacityRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
