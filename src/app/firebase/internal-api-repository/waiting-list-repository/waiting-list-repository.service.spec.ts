import { TestBed } from '@angular/core/testing';

import { WaitingListRepositoryService } from './waiting-list-repository.service';

describe('WaitingListRepositoryService', () => {
  let service: WaitingListRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
