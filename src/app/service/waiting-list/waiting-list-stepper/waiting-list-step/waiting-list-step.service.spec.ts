import { TestBed } from '@angular/core/testing';

import { WaitingListStepService } from './waiting-list-step.service';

describe('WaitingListStepService', () => {
  let service: WaitingListStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
