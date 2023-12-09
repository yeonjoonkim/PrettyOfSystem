import { TestBed } from '@angular/core/testing';

import { MassageBodyBackService } from './massage-body-back.service';

describe('MassageBodyBackService', () => {
  let service: MassageBodyBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageBodyBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
