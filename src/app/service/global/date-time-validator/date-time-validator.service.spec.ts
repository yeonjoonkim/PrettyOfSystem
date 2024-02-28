import { TestBed } from '@angular/core/testing';

import { DateTimeValidatorService } from './date-time-validator.service';

describe('DateTimeValidatorService', () => {
  let service: DateTimeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
