import { TestBed } from '@angular/core/testing';

import { MedicalHistoryIntegumentaryService } from './medical-history-integumentary.service';

describe('MedicalHistoryIntegumentaryService', () => {
  let service: MedicalHistoryIntegumentaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryIntegumentaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
