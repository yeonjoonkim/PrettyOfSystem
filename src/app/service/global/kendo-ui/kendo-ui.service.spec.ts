import { TestBed } from '@angular/core/testing';

import { KendoUiService } from './kendo-ui.service';

describe('KendoUiService', () => {
  let service: KendoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
