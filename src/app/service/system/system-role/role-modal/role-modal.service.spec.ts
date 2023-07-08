import { TestBed } from '@angular/core/testing';

import { RoleModalService } from './system-role-modal.service';

describe('RoleModalService', () => {
  let service: RoleModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
