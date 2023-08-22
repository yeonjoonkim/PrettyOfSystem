import { TestBed } from '@angular/core/testing';

import { StatusValidationService } from './status-validation.service';

describe('StatusValidationService', () => {
  let service: StatusValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
