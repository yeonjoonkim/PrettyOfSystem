import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  NameValuePairType,
  SchedulerViewModeType,
  ShopWorkHoursType,
  TimeZoneType,
  SchedulerEmployeeViewModeType,
} from 'src/app/interface';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import * as Constant from 'src/app/constant/constant';
import { PopoverController } from '@ionic/angular';
import { ShopReservationSchedulerMobileToolbarPopoverComponent } from '../shop-reservation-scheduler-mobile-toolbar-popover/shop-reservation-scheduler-mobile-toolbar-popover.component';
import { ShopVerifyNewClientPhoneNumberPopoverComponent } from 'src/app/component/shop/shop-client-management/shop-verify-new-client-phone-number-popover/shop-verify-new-client-phone-number-popover.component';
@Component({
  selector: 'shop-reservation-scheduler-toolbar',
  templateUrl: './shop-reservation-scheduler-toolbar.component.html',
  styleUrls: ['./shop-reservation-scheduler-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopReservationSchedulerToolbarComponent implements OnInit, OnChanges {
  private _popover = inject(PopoverController);
  public selectedWorkingEmployee!: NameValuePairType;
  public kendo = inject(KendoUiService);
  public workingEmployeeSelection: NameValuePairType[] = [
    { name: 'label.title.allemployee', value: Constant.Scheduler.EmployeeView.All },
    { name: 'label.title.workingemployee', value: Constant.Scheduler.EmployeeView.Working },
    { name: 'label.title.dayoffemployee', value: Constant.Scheduler.EmployeeView.DayOff },
  ];

  @Input() loaded!: boolean;

  //Work Hours
  @Input() showWorkHours!: boolean;

  //Date Picker Button
  @Input() allowPreviousDate!: boolean;
  @Input() allowToday!: boolean;
  @Input() allowNextDate!: boolean;
  @Input() isToday!: boolean;

  //Date Picker
  @Input() startOfDay!: string;
  @Input() timezone!: TimeZoneType;
  @Input() displayNextDays!: number;
  @Input() displayPreviousDays!: number;
  @Input() operatingHours!: ShopWorkHoursType | undefined;

  //View Mode
  @Input() viewModeType!: SchedulerViewModeType;
  @Input() employeeViewType!: SchedulerEmployeeViewModeType;

  //Setting
  @Output() onClickClock = new EventEmitter<void>();
  @Output() onClickView = new EventEmitter<SchedulerViewModeType>();
  //Date
  @Output() onClickPreviousDate = new EventEmitter<void>();
  @Output() onClickNextDate = new EventEmitter<void>();
  @Output() onClickToday = new EventEmitter<void>();
  @Output() onChangeDate = new EventEmitter<string>();
  @Output() onChangeEmployeeView = new EventEmitter<SchedulerEmployeeViewModeType>();
  @Output() scrollToCurrentTime = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const employeeViewChange = changes['employeeViewType'];

    if (employeeViewChange && employeeViewChange?.firstChange) {
      this.selectedWorkingEmployee = getSelectedEmployeeView(employeeViewChange.currentValue);
    }
  }

  onChangeEmployeeSelection(pair: NameValuePairType) {
    this.onChangeEmployeeView.emit(pair.value as SchedulerEmployeeViewModeType);
  }

  async onOpenPopover(event: Event) {
    const popover = await this._popover.create({
      component: ShopReservationSchedulerMobileToolbarPopoverComponent,
      event: event,
      translucent: true,
      size: 'auto',
      cssClass: 'reservation-mobile-popover-container',
    });

    await popover.present();
  }
}

function getSelectedEmployeeView(selected: SchedulerEmployeeViewModeType) {
  switch (selected) {
    case Constant.Scheduler.EmployeeView.All:
      return { name: 'label.title.allemployee', value: Constant.Scheduler.EmployeeView.All };
    case Constant.Scheduler.EmployeeView.DayOff:
      return { name: 'label.title.dayoffemployee', value: Constant.Scheduler.EmployeeView.DayOff };
    case Constant.Scheduler.EmployeeView.Working:
      return { name: 'label.title.workingemployee', value: Constant.Scheduler.EmployeeView.Working };
    default:
      return { name: 'label.title.allemployee', value: Constant.Scheduler.EmployeeView.All };
  }
}
