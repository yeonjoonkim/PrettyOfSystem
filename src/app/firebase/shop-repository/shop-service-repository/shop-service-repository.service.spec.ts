import { TestBed } from '@angular/core/testing';

import { ShopServiceRepositoryService } from './shop-service-repository.service';

describe('ShopRepositoryService', () => {
  let service: ShopServiceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServiceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
