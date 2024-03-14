import { Component, Input, OnInit, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ShopVerifyNewClientPhoneNumberPopoverComponent } from 'src/app/component/shop/shop-client-management/shop-verify-new-client-phone-number-popover/shop-verify-new-client-phone-number-popover.component';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
@Component({
  selector: 'shop-reservation-schedule-reviews',
  templateUrl: './shop-reservation-schedule-reviews.component.html',
  styleUrls: ['./shop-reservation-schedule-reviews.component.scss'],
})
export class ShopReservationScheduleReviewsComponent implements OnInit {
  private _popover = inject(PopoverController);
  public kendo = inject(KendoUiService);

  @Input() numOfPendingReservation: number = 0;
  @Input() numOfScheduledReservation: number = 0;
  @Input() numOfStartingReservation: number = 0;
  @Input() numOfCompletedReservation: number = 0;

  constructor() {}

  async openClickNewClient(event: Event) {
    const popover = await this._popover.create({
      component: ShopVerifyNewClientPhoneNumberPopoverComponent,
      event: event,
      translucent: true,
      size: 'auto',
      cssClass: 'center-popover-container verify-phone-container',
    });
    await popover.present();
  }

  ngOnInit() {}
}
