import { TestBed } from '@angular/core/testing';

import { MedicalHistoryUrinaryService } from './medical-history-urinary.service';

describe('MedicalHistoryUrinaryService', () => {
  let service: MedicalHistoryUrinaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryUrinaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
