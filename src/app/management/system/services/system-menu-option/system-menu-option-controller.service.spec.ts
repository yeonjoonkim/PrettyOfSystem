import { TestBed } from '@angular/core/testing';

import { SystemMenuOptionControllerService } from './system-menu-option-controller.service';

describe('SystemMenuOptionControllerService', () => {
  let service: SystemMenuOptionControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemMenuOptionControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
