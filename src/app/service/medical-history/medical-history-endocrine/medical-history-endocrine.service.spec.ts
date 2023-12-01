import { TestBed } from '@angular/core/testing';

import { MedicalHistoryEndocrineService } from './medical-history-endocrine.service';

describe('MedicalHistoryEndocrineService', () => {
  let service: MedicalHistoryEndocrineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryEndocrineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
