import { TestBed } from '@angular/core/testing';

import { SignatureTransferService } from './signature-transfer.service';

describe('SignatureTransferService', () => {
  let service: SignatureTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
