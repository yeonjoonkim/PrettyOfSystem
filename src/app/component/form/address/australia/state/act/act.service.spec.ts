import { TestBed } from '@angular/core/testing';

import { ActService } from './act.service';

describe('ActService', () => {
  let service: ActService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
