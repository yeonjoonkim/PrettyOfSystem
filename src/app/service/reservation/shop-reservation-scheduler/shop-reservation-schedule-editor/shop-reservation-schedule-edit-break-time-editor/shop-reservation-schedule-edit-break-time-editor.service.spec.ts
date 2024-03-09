import { TestBed } from '@angular/core/testing';

import { ShopReservationScheduleEditBreakTimeEditorService } from './shop-reservation-schedule-edit-break-time-editor.service';

describe('ShopReservationScheduleEditBreakTimeEditorService', () => {
  let service: ShopReservationScheduleEditBreakTimeEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationScheduleEditBreakTimeEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
