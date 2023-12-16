import { TestBed } from '@angular/core/testing';

import { WaitingListCartService } from './waiting-list-cart.service';

describe('WaitingListCartService', () => {
  let service: WaitingListCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
