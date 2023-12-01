import { TestBed } from '@angular/core/testing';

import { MedicalHistoryLymphaticService } from './medical-history-lymphatic.service';

describe('MedicalHistoryLymphaticService', () => {
  let service: MedicalHistoryLymphaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryLymphaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
