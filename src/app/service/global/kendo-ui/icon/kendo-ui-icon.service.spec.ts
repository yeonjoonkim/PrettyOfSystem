import { TestBed } from '@angular/core/testing';

import { KendoUiIconService } from './kendo-ui-icon.service';

describe('KendoUiIconService', () => {
  let service: KendoUiIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendoUiIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
