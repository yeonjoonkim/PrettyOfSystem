import { TestBed } from '@angular/core/testing';

import { ShopExtraManagementService } from './shop-extra-management.service';

describe('ShopExtraManagementService', () => {
  let service: ShopExtraManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopExtraManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
