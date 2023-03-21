import { TestBed } from '@angular/core/testing';

import { RoleRateService } from './role-rate.service';

describe('RoleRateService', () => {
  let service: RoleRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
