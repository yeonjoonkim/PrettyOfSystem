import { TestBed } from '@angular/core/testing';

import { CheckInCartService } from './check-in-cart.service';

describe('CheckInCartService', () => {
  let service: CheckInCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
