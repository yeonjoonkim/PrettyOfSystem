import { TestBed } from '@angular/core/testing';

import { ShopClientQueryService } from './shop-client-query.service';

describe('ShopClientQueryService', () => {
  let service: ShopClientQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopClientQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
