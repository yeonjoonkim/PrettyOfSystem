import { TestBed } from '@angular/core/testing';

import { ShopClientManagementService } from './shop-client-management.service';

describe('ShopClientManagementService', () => {
  let service: ShopClientManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopClientManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
