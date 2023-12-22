import { Injectable } from '@angular/core';
import { EmployeeSchedulerService } from './employee-scheduler/employee-scheduler.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public scheduler: EmployeeSchedulerService) {}
}
