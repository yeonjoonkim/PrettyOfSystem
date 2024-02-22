import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ShopWorkHoursType, TimeZoneType } from 'src/app/interface';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import { SchedulerViewMode, ShopSchedulerViewModeType } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';

@Component({
  selector: 'shop-reservation-scheduler-toolbar',
  templateUrl: './shop-reservation-scheduler-toolbar.component.html',
  styleUrls: ['./shop-reservation-scheduler-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopReservationSchedulerToolbarComponent implements OnInit {
  public dayMode: ShopSchedulerViewModeType = SchedulerViewMode.Day;
  public timelineMode: ShopSchedulerViewModeType = SchedulerViewMode.Timeline;

  public kendo = inject(KendoUiService);
  @Input() loaded!: boolean;
  //Work Hours
  @Input() showWorkHours!: boolean;

  //Date Picker Button
  @Input() allowPreviousDate!: boolean;
  @Input() allowToday!: boolean;
  @Input() allowNextDate!: boolean;

  //Date Picker
  @Input() startOfDay!: string;
  @Input() timezone!: TimeZoneType;
  @Input() displayNextDays!: number;
  @Input() displayPreviousDays!: number;
  @Input() operatingHours!: ShopWorkHoursType | undefined;

  //View Mode
  @Input() isDayView!: boolean;
  @Input() isTimelineView!: boolean;


  //Setting
  @Output() onClickClock = new EventEmitter<void>();
  @Output() onClickView = new EventEmitter<ShopSchedulerViewModeType>();
  //Date
  @Output() onClickPreviousDate = new EventEmitter<void>();
  @Output() onClickNextDate = new EventEmitter<void>();
  @Output() onClickToday = new EventEmitter<void>();
  @Output() onChangeDate = new EventEmitter<string>();



  constructor() { }

  ngOnInit() {}

}
