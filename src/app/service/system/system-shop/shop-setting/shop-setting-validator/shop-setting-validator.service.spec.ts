import { TestBed } from '@angular/core/testing';

import { ShopSettingValidatorService } from './shop-setting-validator.service';

describe('ShopSettingValidatorService', () => {
  let service: ShopSettingValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSettingValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
