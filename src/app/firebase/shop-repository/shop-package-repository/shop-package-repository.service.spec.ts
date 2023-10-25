import { TestBed } from '@angular/core/testing';

import { ShopPackageRepositoryService } from './shop-package-repository.service';

describe('ShopPackageRepositoryService', () => {
  let service: ShopPackageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
