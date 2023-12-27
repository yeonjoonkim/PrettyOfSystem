import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IShopSetting, ShopConfigurationType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'shop-setting-finance',
  templateUrl: './shop-setting-finance.component.html',
  styleUrls: ['./shop-setting-finance.component.scss'],
})
export class ShopSettingFinanceComponent implements OnInit {
  public setting!: IShopSetting;
  public form!: IFormHeaderModalProp;
  private _validator = {
    tax: false,
    cardSurcharge: false,
    cashDiscount: false,
    openingBalance: false,
    openingHour: false,
    closingHour: false,
  };

  constructor(
    private _modalCtrl: ModalController,
    private _global: GlobalService,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _navParam: NavParams
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.finance';
  }

  async ngOnInit() {
    await this.loadParam();
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const saved = await this._shopSetting.update(this.setting);
    if (!saved) {
      this.form.enabledSavebutton = true;
    } else {
      await this.dismiss();
    }
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public onChangeTaxRate() {
    this.setting.financial.taxRate = this._global.numberTransform.nullReplaceToZero(
      this.setting.financial.taxRate
    );
    this.handleEnabledSaveBtn();
  }

  public onChangeCardSurcharge() {
    this.setting.financial.cardSurchargeRate = this._global.numberTransform.nullReplaceToZero(
      this.setting.financial.cardSurchargeRate
    );
    this.handleEnabledSaveBtn();
  }

  public onChangeCashDiscount() {
    if (this.setting.financial.cashDiscount) {
      this.setting.financial.cashDiscount.rate = this._global.numberTransform.nullReplaceToZero(
        this.setting.financial.cashDiscount.rate
      );
    }
    this.handleEnabledSaveBtn();
  }

  public onClickCashDiscount() {
    this.setting.financial.cashDiscount =
      this.setting.financial.cashDiscount !== null
        ? null
        : {
            enableCoupon: false,
            enableExtra: true,
            enablePackage: true,
            enableService: true,
            rate: Constant.ShopSetting.Financial.CashDiscountRate,
          };
    this.onChangeCashDiscount();
  }

  public onChangeOpeningBalance() {
    this.setting.financial.openingBalance = this._global.numberTransform.nullReplaceToZero(
      this.setting.financial.openingBalance
    );
  }

  private handleEnabledSaveBtn() {
    this._validator.cardSurcharge = this.setting.financial.cardSurchargeRate > 0;
    this._validator.cashDiscount =
      this.setting.financial.cashDiscount !== null ? this.setting.financial.cashDiscount.rate > 0 : true;
    this._validator.tax = this.setting.financial.taxRate > 0;
    this.form.enabledSavebutton =
      this._validator.cardSurcharge && this._validator.cashDiscount && this._validator.tax;
  }

  private async loadParam() {
    const config: ShopConfigurationType | undefined = await this._navParam.get('config');
    if (config !== undefined) {
      this.setting = config.setting;
      this.handleEnabledSaveBtn();
    } else {
      await this.dismiss();
    }
  }
}
