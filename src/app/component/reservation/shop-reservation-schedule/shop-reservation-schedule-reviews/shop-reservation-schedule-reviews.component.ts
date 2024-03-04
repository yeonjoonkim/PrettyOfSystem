import { Component, Input, OnInit, inject } from '@angular/core';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
@Component({
  selector: 'shop-reservation-schedule-reviews',
  templateUrl: './shop-reservation-schedule-reviews.component.html',
  styleUrls: ['./shop-reservation-schedule-reviews.component.scss'],
})
export class ShopReservationScheduleReviewsComponent implements OnInit {
  public kendo = inject(KendoUiService);

  @Input() numOfPendingReservation: number = 0;
  @Input() numOfScheduledReservation: number = 0;
  @Input() numOfStartingReservation: number = 0;
  @Input() numOfCompletedReservation: number = 0;

  constructor() {}

  ngOnInit() {}
}
