import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { IShopSetting, IFormHeaderModalProp, NameValuePairType, TimeItemType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'shop-setting-calendar',
  templateUrl: './shop-setting-calendar.component.html',
  styleUrls: ['./shop-setting-calendar.component.scss'],
})
export class ShopSettingCalendarComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public form!: IFormHeaderModalProp;
  public setting!: IShopSetting;
  public timezone!: string;
  public interval: TimeItemType[] = [];

  public intervalMinSelection: NameValuePairType[] = [
    { name: 'label.title.5min', value: '5' },
    { name: 'label.title.10min', value: '10' },
    { name: 'label.title.15min', value: '15' },
    { name: 'label.title.30min', value: '30' },
    { name: 'label.title.60min', value: '60' },
  ];

  public nextAvailableMinSelection: NameValuePairType[] = [
    { name: 'label.title.5minafter', value: '5' },
    { name: 'label.title.10minafter', value: '10' },
    { name: 'label.title.15minafter', value: '15' },
    { name: 'label.title.30minafter', value: '30' },
    { name: 'label.title.60minafter', value: '60' },
  ];

  public maximumAvailableFutureBookingDaysSelection: NameValuePairType[] = [
    { name: 'label.title.until7days', value: '7' },
    { name: 'label.title.until14days', value: '14' },
    { name: 'label.title.until21days', value: '21' },
    { name: 'label.title.until28days', value: '28' },
  ];

  public selectedIntervalMin!: NameValuePairType;
  public selectedNextAvailableMin!: NameValuePairType;
  public selectedMaximumAvailableFutureBookingDays!: NameValuePairType;

  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.calendar';
  }

  ngOnInit() {
    this._shopSetting.setting$.pipe(takeUntil(this._destroy$)).subscribe(s => {
      if (s !== null) {
        this.setIntervalMin(s);
        this.setNextAvailableMin(s);
        this.setMaximumAvailableFutureBookingDays(s);
        this.setting = s;
      }
    });
    this._shopSetting.timezone$.pipe(takeUntil(this._destroy$)).subscribe(t => {
      if (t !== null) {
        this.timezone = t;
      }
    });
  }

  handleEnabledSaveBtn() {
    const mins = [5, 10, 15, 30, 60];
    const days = [7, 14, 21, 28];

    const intervalMin = mins.includes(this.setting.calendar.intervalMin);
    const nextAvailableMin = mins.includes(this.setting.calendar.nextAvailableBookingMin);
    const maxAvailableFutureDays = days.includes(this.setting.calendar.maximumAvailableFutureBookingDays);
    this.form.enabledSavebutton = intervalMin && nextAvailableMin && maxAvailableFutureDays;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopSetting.update(this.setting);
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public handleEdit() {
    this.form.readOnly = false;
    this.handleEnabledSaveBtn();
  }

  public onChangeIntervalMin() {
    const selectedMin = Number(this.selectedIntervalMin.value);
    this.setting.calendar.intervalMin = selectedMin;
    this.handleEnabledSaveBtn();
  }

  public onChangeNextAvailableMin() {
    const selectedMin = Number(this.selectedNextAvailableMin.value);
    this.setting.calendar.nextAvailableBookingMin = selectedMin;
    this.handleEnabledSaveBtn();
  }

  public onChangeMaximumAvailableFutureBookingDays() {
    const selectedDays = Number(this.selectedMaximumAvailableFutureBookingDays.value);
    this.setting.calendar.maximumAvailableFutureBookingDays = selectedDays;
    this.handleEnabledSaveBtn();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private setIntervalMin(setting: IShopSetting) {
    const selected = this.intervalMinSelection.find(s => s.value === setting.calendar.intervalMin.toString());
    if (selected) {
      this.selectedIntervalMin = selected;
    }
  }

  private setNextAvailableMin(setting: IShopSetting) {
    const selected = this.nextAvailableMinSelection.find(
      s => s.value === setting.calendar.nextAvailableBookingMin.toString()
    );
    if (selected) {
      this.selectedNextAvailableMin = selected;
    }
  }

  private setMaximumAvailableFutureBookingDays(setting: IShopSetting) {
    const selected = this.maximumAvailableFutureBookingDaysSelection.find(
      s => s.value === setting.calendar.maximumAvailableFutureBookingDays.toString()
    );
    if (selected) {
      this.selectedMaximumAvailableFutureBookingDays = selected;
    }
  }
}
