import { TestBed } from '@angular/core/testing';

import { ShopConfiguration } from './shop-configuration.service';

describe('ShopService', () => {
  let service: ShopConfiguration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopConfiguration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
