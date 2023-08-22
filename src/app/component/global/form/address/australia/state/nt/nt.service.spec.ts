import { TestBed } from '@angular/core/testing';

import { NtService } from './nt.service';

describe('NtService', () => {
  let service: NtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
