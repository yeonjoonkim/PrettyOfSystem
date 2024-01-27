import { TestBed } from '@angular/core/testing';

import { SignatureTransferRepositoryService } from './signature-transfer-repository.service';

describe('SignatureTransferRepositoryService', () => {
  let service: SignatureTransferRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureTransferRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
