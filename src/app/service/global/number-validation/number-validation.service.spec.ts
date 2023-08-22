import { TestBed } from '@angular/core/testing';

import { NumberValidationService } from './number-validation.service';

describe('NumberValidationService', () => {
  let service: NumberValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
