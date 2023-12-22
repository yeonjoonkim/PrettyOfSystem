import { TestBed } from '@angular/core/testing';

import { EmployeeSchedulerService } from './employee-scheduler.service';

describe('EmployeeSchedulerService', () => {
  let service: EmployeeSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
