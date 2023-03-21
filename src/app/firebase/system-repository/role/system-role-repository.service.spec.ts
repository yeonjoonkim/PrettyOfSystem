import { TestBed } from '@angular/core/testing';

import { SystemRoleRepositoryService } from './system-role-repository.service';

describe('SystemRoleRepositoryService', () => {
  let service: SystemRoleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemRoleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
