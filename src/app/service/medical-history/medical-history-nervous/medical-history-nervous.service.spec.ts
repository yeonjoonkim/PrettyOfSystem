import { TestBed } from '@angular/core/testing';

import { MedicalHistoryNervousService } from './medical-history-nervous.service';

describe('MedicalHistoryNervousService', () => {
  let service: MedicalHistoryNervousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHistoryNervousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
