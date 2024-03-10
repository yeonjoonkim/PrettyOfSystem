import { TestBed } from '@angular/core/testing';

import { ShopReservationScheduleAddBreakTimeEditorService } from './shop-reservation-schedule-add-break-time-editor.service';

describe('ShopReservationScheduleAddBreakTimeEditorService', () => {
  let service: ShopReservationScheduleAddBreakTimeEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationScheduleAddBreakTimeEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
