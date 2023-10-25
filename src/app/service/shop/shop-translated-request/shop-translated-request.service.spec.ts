import { TestBed } from '@angular/core/testing';

import { ShopTranslatedRequestService } from './shop-translated-request.service';

describe('ShopTranslatedRequestService', () => {
  let service: ShopTranslatedRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopTranslatedRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
