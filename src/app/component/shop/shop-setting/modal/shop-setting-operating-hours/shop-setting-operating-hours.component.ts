import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { IFormHeaderModalProp, ShopConfigurationType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'app-shop-setting-operating-hours',
  templateUrl: './shop-setting-operating-hours.component.html',
  styleUrls: ['./shop-setting-operating-hours.component.scss'],
})
export class ShopSettingOperatingHoursComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  public config!: ShopConfigurationType;
  public form!: IFormHeaderModalProp;
  public validator = {
    workHours: false,
  };
  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.operatinghours';
  }

  ngOnInit() {
    this._shopSetting.config$.pipe(takeUntil(this._destroy$)).subscribe(s => {
      if (s !== null) {
        console.log(s.operatingHours);
        this.config = s;
        this.handleEnabledSaveBtn();
      }
    });
  }

  handleEnabledSaveBtn() {
    this.form.enabledSavebutton = this.validator.workHours;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopSetting.updateConfig(this.config);
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
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
