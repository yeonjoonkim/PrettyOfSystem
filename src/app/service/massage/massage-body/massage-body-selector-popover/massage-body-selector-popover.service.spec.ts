import { TestBed } from '@angular/core/testing';

import { MassageBodySelectorPopoverService } from './massage-body-selector-popover.service';

describe('MassageBodySelectorPopoverService', () => {
  let service: MassageBodySelectorPopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageBodySelectorPopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
