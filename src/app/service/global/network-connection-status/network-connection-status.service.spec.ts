import { TestBed } from '@angular/core/testing';

import { NetworkConnectionStatusService } from './network-connection-status.service';

describe('NetworkConnectionStatusService', () => {
  let service: NetworkConnectionStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkConnectionStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
