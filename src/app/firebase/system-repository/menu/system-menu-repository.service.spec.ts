import { TestBed } from '@angular/core/testing';

import { SystemMenuRepositoryService } from './system-menu-repository.service';

describe('SystemMenuRepositoryService', () => {
  let service: SystemMenuRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemMenuRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
