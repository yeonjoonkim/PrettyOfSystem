import { TestBed } from '@angular/core/testing';

import { ShopPackageManagementService } from './shop-package-management.service';

describe('ShopPackageManagementService', () => {
  let service: ShopPackageManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackageManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
