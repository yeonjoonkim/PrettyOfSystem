import { TestBed } from '@angular/core/testing';

import { ShopOneTimeCheckinUrlService } from './shop-one-time-checkin-url.service';

describe('ShopOneTimeCheckinUrlService', () => {
  let service: ShopOneTimeCheckinUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopOneTimeCheckinUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
