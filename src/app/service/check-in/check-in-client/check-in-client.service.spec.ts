import { TestBed } from '@angular/core/testing';

import { CheckInClientService } from './check-in-client.service';

describe('CheckInClientService', () => {
  let service: CheckInClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
