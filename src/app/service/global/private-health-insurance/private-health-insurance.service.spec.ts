import { TestBed } from '@angular/core/testing';

import { PrivateHealthInsuranceService } from './private-health-insurance.service';

describe('PrivateHealthInsuranceService', () => {
  let service: PrivateHealthInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateHealthInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
