import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { IFormHeaderModalProp, IShopSetting } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'shop-setting-finance',
  templateUrl: './shop-setting-finance.component.html',
  styleUrls: ['./shop-setting-finance.component.scss'],
})
export class ShopSettingFinanceComponent implements OnInit, OnDestroy {
  public setting!: IShopSetting;
  public form!: IFormHeaderModalProp;

  private _destroy$ = new Subject<void>();
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
    private _formCtrl: FormControllerService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.finance';
  }

  ngOnInit() {
    this._shopSetting.setting$.pipe(takeUntil(this._destroy$)).subscribe(s => {
      if (s !== null) {
        this.setting = s;
        this.handleEnabledSaveBtn();
      }
    });
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
    this.setting.financial.cashDiscountRate = this._global.numberTransform.nullReplaceToZero(
      this.setting.financial.cashDiscountRate
    );
    this.handleEnabledSaveBtn();
  }

  public onChangeOpeningBalance() {
    this.setting.financial.openingBalance = this._global.numberTransform.nullReplaceToZero(
      this.setting.financial.openingBalance
    );
  }

  public onChangeClosingTime() {}

  private handleEnabledSaveBtn() {
    this._validator.cardSurcharge = this.setting.financial.cardSurchargeRate > 0;
    this._validator.cashDiscount = this.setting.financial.cashDiscountRate > 0;
    this._validator.tax = this.setting.financial.taxRate > 0;
    this.form.enabledSavebutton =
      this._validator.cardSurcharge && this._validator.cashDiscount && this._validator.tax;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
