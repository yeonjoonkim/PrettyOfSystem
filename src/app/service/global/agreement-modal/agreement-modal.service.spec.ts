import { TestBed } from '@angular/core/testing';

import { AgreementModalService } from './agreement-modal.service';

describe('AgreementModalService', () => {
  let service: AgreementModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgreementModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
