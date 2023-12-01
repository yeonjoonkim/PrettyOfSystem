import { TestBed } from '@angular/core/testing';

import { MedicalHistoryCardiovascularService } from './medical-history-cardiovascular.service';

describe('MedicalHistoryCardiovascularService', () => {
  let service: MedicalHistoryCardiovascularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryCardiovascularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
