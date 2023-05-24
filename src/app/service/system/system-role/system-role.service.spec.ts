import { TestBed } from '@angular/core/testing';

import { SystemRoleService } from './system-system-role.service';

describe('SystemRoleService', () => {
  let service: SystemRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
