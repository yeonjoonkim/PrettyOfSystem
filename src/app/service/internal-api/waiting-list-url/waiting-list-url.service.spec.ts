import { TestBed } from '@angular/core/testing';

import { WaitingListUrlService } from './waiting-list-url.service';

describe('WaitingListUrlService', () => {
  let service: WaitingListUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
