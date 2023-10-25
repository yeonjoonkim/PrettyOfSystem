import { TestBed } from '@angular/core/testing';

import { ShopRelatedServiceService } from './shop-related-service.service';

describe('ShopRelatedServiceService', () => {
  let service: ShopRelatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopRelatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
