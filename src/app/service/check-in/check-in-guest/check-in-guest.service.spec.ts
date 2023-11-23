import { TestBed } from '@angular/core/testing';

import { CheckInGuestService } from './check-in-guest.service';

describe('CheckInGuestService', () => {
  let service: CheckInGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
