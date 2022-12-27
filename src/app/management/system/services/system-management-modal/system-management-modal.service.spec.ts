import { TestBed } from '@angular/core/testing';

import { SystemManagementModalService } from './system-management-modal.service';

describe('SystemManagementModalService', () => {
  let service: SystemManagementModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemManagementModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
