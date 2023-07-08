import { TestBed } from '@angular/core/testing';

import { ShopModalService } from './shop-modal.service';

describe('ShopModalService', () => {
  let service: ShopModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
