import { TestBed } from '@angular/core/testing';

import { MedicalHistoryDigestiveService } from './medical-history-digestive.service';

describe('MedicalHistoryDigestiveService', () => {
  let service: MedicalHistoryDigestiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryDigestiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
