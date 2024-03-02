import { Component, OnInit, computed, inject } from '@angular/core';
import { NameValuePairType } from 'src/app/interface';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import * as Constant from 'src/app/constant/constant';
import { ShopReservationSchedulerService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-scheduler.service';

@Component({
  selector: 'app-shop-reservation-scheduler-mobile-toolbar-popover',
  templateUrl: './shop-reservation-scheduler-mobile-toolbar-popover.component.html',
  styleUrls: ['./shop-reservation-scheduler-mobile-toolbar-popover.component.scss'],
})
export class ShopReservationSchedulerMobileToolbarPopoverComponent implements OnInit {
  public kendo = inject(KendoUiService);
  public scheduler = inject(ShopReservationSchedulerService);
  public workingEmployeeSelection: NameValuePairType[] = [
    { name: 'label.title.allemployee', value: Constant.Scheduler.EmployeeView.All },
    { name: 'label.title.workingemployee', value: Constant.Scheduler.EmployeeView.Working },
    { name: 'label.title.dayoffemployee', value: Constant.Scheduler.EmployeeView.DayOff },
  ];

  public selectedWorkingEmployee = computed(() => {
    const selected = this.scheduler.employeeView();
    return getSelectedEmployeeView(selected);
  });
  constructor() {}

  ngOnInit() {}

  onChangeEmployeeSelection(pair: NameValuePairType) {
    this.scheduler.employeeView.set(pair.value as Constant.SchedulerEmployeeViewModeType);
  }
}

function getSelectedEmployeeView(selected: Constant.SchedulerEmployeeViewModeType): NameValuePairType {
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
