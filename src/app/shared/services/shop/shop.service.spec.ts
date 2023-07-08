import { TestBed } from '@angular/core/testing';

import { Shop } from './shop.service';

describe('ShopService', () => {
  let service: Shop;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shop);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
