import { TestBed } from '@angular/core/testing';

import { PrivateHealthInsuranceListService } from './private-health-insurance-list.service';

describe('PrivateHealthInsuranceListService', () => {
  let service: PrivateHealthInsuranceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateHealthInsuranceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
