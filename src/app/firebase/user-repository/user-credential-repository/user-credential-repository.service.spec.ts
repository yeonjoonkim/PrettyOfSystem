import { TestBed } from '@angular/core/testing';

import { UserCredentialRepositoryService } from './user-credential-repository.service';

describe('UserCredentialRepositoryService', () => {
  let service: UserCredentialRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCredentialRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
