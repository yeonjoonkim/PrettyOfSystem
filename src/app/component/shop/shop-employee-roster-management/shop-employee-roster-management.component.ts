import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { ShopEmployeeManagementUserType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopOperatingHoursService } from 'src/app/service/shop/shop-employee-roster-management/shop-operating-hours/shop-operating-hours.service';
import { ModalController } from '@ionic/angular';
import { ShopEmployeeRosterComponent } from './shop-employee-roster/shop-employee-roster.component';
import { ShopEmployeeRosterService } from 'src/app/service/shop/shop-employee-roster-management/shop-employee-roster/shop-employee-roster.service';
import { cloneDeep } from 'lodash-es';
@Component({
  selector: 'shop-employee-roster-management',
  templateUrl: './shop-employee-roster-management.component.html',
  styleUrls: ['./shop-employee-roster-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopEmployeeRosterManagementComponent implements OnInit {
  private _dateSvc = inject(DateService);
  private _operatingHours = inject(ShopOperatingHoursService);
  private _modalCtrl = inject(ModalController);
  private _roster = inject(ShopEmployeeRosterService);

  @Input() employees: ShopEmployeeManagementUserType[] = [];
  public days = Constant.DayList;
  public pageSize: 25 | 50 | 100 | 200 = 25;
  constructor() {}

  ngOnInit() {}

  public isShopOpen(day: Constant.DayType) {
    return this._operatingHours.isWorking(day);
  }

  public isWorking(emp: ShopEmployeeManagementUserType, day: Constant.DayType) {
    return emp.defaultRoster[day].isOpen;
  }

  public isDay(day: Constant.DayType) {
    return day === this._dateSvc.getDay(this._operatingHours.startOfToday());
  }

  public async onClickRoster(emp: ShopEmployeeManagementUserType, day: Constant.DayType) {
    if (!this._roster.loaded()) {
      const employee = cloneDeep(emp);
      const dayInRoster = cloneDeep(day);
      this._roster.start(employee, dayInRoster);
      const modal = await this._modalCtrl.create({
        component: ShopEmployeeRosterComponent,
      });

      await modal.present();

      const dismiss = await modal.onDidDismiss();
      if (dismiss) {
        this._roster.completed();
      }
    }
  }
}
