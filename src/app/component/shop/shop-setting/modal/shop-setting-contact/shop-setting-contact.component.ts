import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, ShopConfigurationType, ShopUpdateContactProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'shop-setting-contact',
  templateUrl: './shop-setting-contact.component.html',
  styleUrls: ['./shop-setting-contact.component.scss'],
})
export class ShopSettingContactComponent implements OnInit {
  public config!: ShopConfigurationType;
  public form!: IFormHeaderModalProp;
  public validator = {
    name: false,
    phone: false,
    email: false,
    address: false,
    timezone: false,
    taxNumber: false,
  };
  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _navParam: NavParams
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.information';
  }

  async ngOnInit() {
    await this.loadParam();
  }

  handleEnabledSaveBtn() {
    this.form.enabledSavebutton =
      this.validator.name &&
      this.validator.email &&
      this.validator.phone &&
      this.validator.address &&
      this.validator.taxNumber &&
      this.validator.timezone;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updateProp: ShopUpdateContactProp = {
      name: this.config.name,
      taxNumber: this.config.taxNumber,
      address: this.config.address,
      companyName: this.config.companyName,
      phone: this.config.phoneNumber,
      email: this.config.email,
    };
    const updated = await this._shopSetting.updateContact(updateProp);
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
