import { TestBed } from '@angular/core/testing';

import { MassageBodyPainService } from './massage-body-pain.service';

describe('MassageBodyPainService', () => {
  let service: MassageBodyPainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageBodyPainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
