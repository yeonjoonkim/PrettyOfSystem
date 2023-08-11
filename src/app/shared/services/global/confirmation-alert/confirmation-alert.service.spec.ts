import { TestBed } from '@angular/core/testing';

import { DeleteConfirmationAlert } from './confirmation-alert.service';

describe('DeleteConfirmationAlertService', () => {
  let service: DeleteConfirmationAlert;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteConfirmationAlert);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});