import { TestBed } from '@angular/core/testing';

import { EmployeeSchedulerBreakService } from './employee-scheduler-break.service';

describe('EmployeeSchedulerBreakService', () => {
  let service: EmployeeSchedulerBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSchedulerBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
