import { TestBed } from '@angular/core/testing';

import { WaitingListStepperService } from './waiting-list-stepper.service';

describe('WaitingListStepperService', () => {
  let service: WaitingListStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
