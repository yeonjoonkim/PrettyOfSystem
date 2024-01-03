import { TestBed } from '@angular/core/testing';

import { WaitingListConsultService } from './waiting-list-consult.service';

describe('WaitingListConsultService', () => {
  let service: WaitingListConsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListConsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
