import { TestBed } from '@angular/core/testing';

import { SystemPlanRepositoryService } from './system-plan-repository.service';

describe('SystemPlanRepositoryService', () => {
  let service: SystemPlanRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemPlanRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
