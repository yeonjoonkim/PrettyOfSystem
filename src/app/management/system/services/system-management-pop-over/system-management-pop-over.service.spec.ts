import { TestBed } from '@angular/core/testing';

import { SystemManagementPopOverService } from './system-management-pop-over.service';

describe('SystemManagementPopOverService', () => {
  let service: SystemManagementPopOverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemManagementPopOverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
