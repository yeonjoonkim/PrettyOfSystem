import { TestBed } from '@angular/core/testing';

import { SystemModalService } from './system-modal.service';

describe('ModalServiceService', () => {
  let service: SystemModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
