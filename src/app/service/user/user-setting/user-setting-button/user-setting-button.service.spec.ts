import { TestBed } from '@angular/core/testing';

import { UserSettingButtonService } from './user-setting-button.service';

describe('UserSettingButtonService', () => {
  let service: UserSettingButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
