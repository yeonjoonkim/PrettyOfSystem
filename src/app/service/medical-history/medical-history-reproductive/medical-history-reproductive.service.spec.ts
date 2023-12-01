import { TestBed } from '@angular/core/testing';

import { MedicalHistoryReproductiveService } from './medical-history-reproductive.service';

describe('MedicalHistoryReproductiveService', () => {
  let service: MedicalHistoryReproductiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryReproductiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
