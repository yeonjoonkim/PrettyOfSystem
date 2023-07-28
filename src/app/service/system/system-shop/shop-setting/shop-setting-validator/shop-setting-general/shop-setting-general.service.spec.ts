import { TestBed } from '@angular/core/testing';

import { ShopSettingGeneral } from './shop-setting-general.service';

describe('GeneralService', () => {
  let service: ShopSettingGeneral;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSettingGeneral);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
