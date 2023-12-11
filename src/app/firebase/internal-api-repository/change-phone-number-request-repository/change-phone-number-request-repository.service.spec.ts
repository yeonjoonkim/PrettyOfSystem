import { TestBed } from '@angular/core/testing';

import { ChangePhoneNumberRequestRepositoryService } from './change-phone-number-request-repository.service';

describe('ChangePhoneNumberRequestRepositoryService', () => {
  let service: ChangePhoneNumberRequestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangePhoneNumberRequestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
