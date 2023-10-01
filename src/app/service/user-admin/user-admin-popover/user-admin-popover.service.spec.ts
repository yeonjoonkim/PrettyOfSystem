import { TestBed } from '@angular/core/testing';

import { UserAdminPopoverService } from './user-admin-popover.service';

describe('UserAdminPopoverService', () => {
  let service: UserAdminPopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAdminPopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
