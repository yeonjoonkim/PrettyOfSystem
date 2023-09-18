import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import { Component, OnInit } from '@angular/core';
import { ShopConfigurationType } from 'src/app/interface/shop/shop.interface';
import * as Constant from 'src/app/constant/constant';
import {
  ShopConfigurationTypeDisplayOption,
  ShopConfigurationTypeValidator,
  ShopConfigurationService,
} from 'src/app/service/system/system-shop/shop-configuration/shop-configuration.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'shop-configuration',
  templateUrl: './shop-configuration.component.html',
  styleUrls: ['./shop-configuration.component.scss'],
})
//TODO: ADD USER VERIFICATION
export class ShopConfigurationComponent implements OnInit {
  public planPrice: number = 0;
  public form!: IFormHeaderModalProp;
  public timeZoneList: Constant.TimeZoneType[] = Object.values(Constant.TimeZone);
  public validator: ShopConfigurationTypeValidator = this._shopConfig.defaultValidator();
  public display: ShopConfigurationTypeDisplayOption = this._shopConfig.defaultShopDisplayOption();
  public config: ShopConfigurationType = this._shopConfig.setDefaultConfig();
  private _selectedconfig!: ShopConfigurationType | undefined;

  constructor(
    private _shopConfig: ShopConfigurationService,
    private _navParams: NavParams,
    private _modalCtrl: ModalController
  ) {
    this.loadingFormCtrl();
  }

  ngOnInit() {
    this.autoPaymentDateCalculation();
  }

  public onChangeForm() {
    this.form.enabledSavebutton = this._shopConfig.formInputValidator(this.validator);
  }
  private loadingFormCtrl(): void {
    let form: IFormHeaderModalProp = this._navParams.get(Constant.Default.ComponentMode.Form);
    this._selectedconfig = this._navParams.get('config');
    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };
    this.config = this._selectedconfig ? this._selectedconfig : this._shopConfig.setDefaultConfig();
  }

  public async onPlanPeriodChange() {
    let newPaymentDate = this._shopConfig.global.date.transform.addDay(
      this.config.plan.lastPaymentDate,
      this.config.plan.period.day
    );
    this.config.plan.paymentDate = newPaymentDate.toUTCDate();
    this.validator.planPeriod = true;
    this.onChangeForm();
  }

  public onClickInfo(): void {
    this.display = this._shopConfig.displayInfo();
  }

  public onClickHours(): void {
    this.display = this._shopConfig.displayWorkHours();
  }

  public onClickAddress(): void {
    this.display = this._shopConfig.displayAddress();
  }

  public onClickSubscription(): void {
    this.display = this._shopConfig.displaySubscription();
  }

  public autoPaymentDateCalculation() {
    if (this.form.action === Constant.Default.FormAction.Create) {
      this.onPlanPeriodChange();
    }
  }

  public async onChangePlan() {
    if (this.config.plan.configurationId) {
      this.planPrice = await this._shopConfig.getSelectedTotalPrice(
        this.config.plan.configurationId,
        this.config.plan.period
      );
    }
    this.onChangeForm();
  }

  public dismiss() {
    this._modalCtrl.dismiss(this.config, 'cancel');
  }

  public async handleEdit() {
    this.form.readOnly = false;
    this.validator = this._shopConfig.editValidator();
    this.onChangeForm();
  }

  public async handleSave() {
    this._shopConfig.handleSave(this.config, this.form);
  }

  public async handleDelete() {
    this._shopConfig.handleDelete(this.config, this.form);
  }

  public async handleCreate() {
    this._shopConfig.handleCreate(this.config, this.form);
  }
}
