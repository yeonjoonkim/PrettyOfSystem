import { TestBed } from '@angular/core/testing';

import { MedicalHistorySkeletalService } from './medical-history-skeletal.service';

describe('MedicalHistorySkeletalService', () => {
  let service: MedicalHistorySkeletalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistorySkeletalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
