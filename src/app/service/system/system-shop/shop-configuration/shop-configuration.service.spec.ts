import { TestBed } from '@angular/core/testing';

import { ShopConfigurationService } from './shop-configuration.service';

describe('ShopConfigurationService', () => {
  let service: ShopConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
