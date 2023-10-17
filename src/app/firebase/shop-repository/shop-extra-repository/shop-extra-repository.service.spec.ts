import { TestBed } from '@angular/core/testing';

import { ShopExtraRepositoryService } from './shop-extra-repository.service';

describe('ShopExtraRepositoryService', () => {
  let service: ShopExtraRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopExtraRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
