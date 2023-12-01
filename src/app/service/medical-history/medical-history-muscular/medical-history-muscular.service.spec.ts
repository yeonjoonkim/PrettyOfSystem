import { TestBed } from '@angular/core/testing';

import { MedicalHistoryMuscularService } from './medical-history-muscular.service';

describe('MedicalHistoryMuscularService', () => {
  let service: MedicalHistoryMuscularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryMuscularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
