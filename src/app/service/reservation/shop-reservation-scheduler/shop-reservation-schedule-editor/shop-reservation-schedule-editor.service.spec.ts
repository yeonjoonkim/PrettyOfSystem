import { TestBed } from '@angular/core/testing';

import { ShopReservationScheduleEditorService } from './shop-reservation-schedule-editor.service';

describe('ShopReservationScheduleEditModalService', () => {
  let service: ShopReservationScheduleEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationScheduleEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
