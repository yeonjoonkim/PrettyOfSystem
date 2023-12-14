import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { IFormHeaderModalProp, ShopConfigurationType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'app-shop-setting-operating-hours',
  templateUrl: './shop-setting-operating-hours.component.html',
  styleUrls: ['./shop-setting-operating-hours.component.scss'],
})
export class ShopSettingOperatingHoursComponent implements OnInit {
  public config!: ShopConfigurationType;
  public form!: IFormHeaderModalProp;
  public validator = {
    workHours: false,
  };
  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _navParam: NavParams
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.operatinghours';
  }

  async ngOnInit() {
    await this.loadParam();
  }

  handleEnabledSaveBtn() {
    this.form.enabledSavebutton = this.validator.workHours;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopSetting.updateOperatingHours(this.config.operatingHours);
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

  private async loadParam() {
    const config: ShopConfigurationType | undefined = await this._navParam.get('config');
    if (config !== undefined) {
      this.config = config;
      this.handleEnabledSaveBtn();
    } else {
      await this.dismiss();
    }
  }
}
