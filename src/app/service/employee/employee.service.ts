import { Injectable } from '@angular/core';
import { EmployeeSchedulerService } from './employee-scheduler/employee-scheduler.service';
import { EmployeeTimeSheetService } from './employee-time-sheet/employee-time-sheet.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    public scheduler: EmployeeSchedulerService,
    public timeSheet: EmployeeTimeSheetService
  ) {}
}
