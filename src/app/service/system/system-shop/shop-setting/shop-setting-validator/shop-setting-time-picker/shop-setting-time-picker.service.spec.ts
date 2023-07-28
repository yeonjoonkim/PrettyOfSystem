import { TestBed } from '@angular/core/testing';

import { ShopSettingTimePicker } from './shop-setting-time-picker.service';

describe('GeneralService', () => {
  let service: ShopSettingTimePicker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSettingTimePicker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
