import { TestBed } from '@angular/core/testing';

import { NswService } from './nsw.service';

describe('NswService', () => {
  let service: NswService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NswService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
