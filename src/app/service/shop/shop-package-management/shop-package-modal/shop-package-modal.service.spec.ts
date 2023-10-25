import { TestBed } from '@angular/core/testing';

import { ShopPackageModalService } from './shop-package-modal.service';

describe('ShopPackageModalService', () => {
  let service: ShopPackageModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPackageModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
