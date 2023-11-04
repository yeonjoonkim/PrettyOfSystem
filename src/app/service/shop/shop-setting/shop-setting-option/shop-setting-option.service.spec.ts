import { TestBed } from '@angular/core/testing';

import { ShopSettingOptionService } from './shop-setting-option.service';

describe('ShopSettingOptionService', () => {
  let service: ShopSettingOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSettingOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
