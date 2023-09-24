import { TestBed } from '@angular/core/testing';

import { UserAdminModalService } from './user-admin-modal.service';

describe('UserAdminModalService', () => {
  let service: UserAdminModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAdminModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
