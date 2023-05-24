import { TestBed } from '@angular/core/testing';

import { PlanModalService } from './plan-modal.service';

describe('PlanModalService', () => {
  let service: PlanModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
