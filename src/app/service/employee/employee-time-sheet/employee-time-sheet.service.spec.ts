import { TestBed } from '@angular/core/testing';

import { EmployeeTimeSheetService } from './employee-time-sheet.service';

describe('EmployeeTimeSheetService', () => {
  let service: EmployeeTimeSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTimeSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
