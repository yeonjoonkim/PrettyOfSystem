import { TestBed } from '@angular/core/testing';

import { SystemTranslateRequestRepositoryService } from './system-translate-request-repository.service';

describe('SystemTranslateRequestService', () => {
  let service: SystemTranslateRequestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemTranslateRequestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
