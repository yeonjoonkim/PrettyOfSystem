import { TestBed } from '@angular/core/testing';

import { MedicalHistoryRespiratoryService } from './medical-history-respiratory.service';

describe('MedicalHistoryRespiratoryService', () => {
  let service: MedicalHistoryRespiratoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryRespiratoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
