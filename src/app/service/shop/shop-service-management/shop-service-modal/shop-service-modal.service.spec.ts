import { TestBed } from '@angular/core/testing';

import { ShopServiceModalService } from './shop-service-modal.service';

describe('ShopServiceModalService', () => {
  let service: ShopServiceModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServiceModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
