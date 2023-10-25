import { TestBed } from '@angular/core/testing';

import { ShopExtraModalService } from './shop-extra-modal.service';

describe('ShopExtraModalService', () => {
  let service: ShopExtraModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopExtraModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
