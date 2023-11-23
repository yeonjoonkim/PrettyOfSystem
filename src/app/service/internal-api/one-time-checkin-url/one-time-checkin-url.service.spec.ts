import { TestBed } from '@angular/core/testing';

import { OneTimeCheckinUrlService } from './one-time-checkin-url.service';

describe('OneTimeCheckinUrlService', () => {
  let service: OneTimeCheckinUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneTimeCheckinUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
