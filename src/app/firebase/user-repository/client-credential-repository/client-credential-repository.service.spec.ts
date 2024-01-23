import { TestBed } from '@angular/core/testing';

import { ClientCredentialRepositoryService } from './client-credential-repository.service';

describe('ClientCredentialRepositoryService', () => {
  let service: ClientCredentialRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCredentialRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
