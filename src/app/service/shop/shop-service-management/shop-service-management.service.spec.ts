import { TestBed } from '@angular/core/testing';

import { ShopServiceManagementService } from './shop-service-management.service';

describe('ShopServiceManagementService', () => {
  let service: ShopServiceManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServiceManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
