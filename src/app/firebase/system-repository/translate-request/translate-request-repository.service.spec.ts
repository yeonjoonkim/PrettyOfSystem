import { TestBed } from '@angular/core/testing';

import { TranslateRequestRepositoryService } from './translate-request-repository.service';

describe('TranslateRequestService', () => {
  let service: TranslateRequestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateRequestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
