import { TestBed } from '@angular/core/testing';

import { ClientModalService } from './client-modal.service';

describe('ClientModalService', () => {
  let service: ClientModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
