import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import {
  IFormHeaderModalProp,
  IShopSetting,
  MedicalInsuranceType,
  NameValuePairType,
  ShopInsuranceProvider,
} from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import * as Constant from 'src/app/constant/constant';
import { PrivateHealthInsuranceListService } from 'src/app/service/global/private-health-insurance/private-health-insurance-list/private-health-insurance-list.service';

@Component({
  selector: 'shop-setting-insurance-provider',
  templateUrl: './shop-setting-insurance-provider.component.html',
  styleUrls: ['./shop-setting-insurance-provider.component.scss'],
})
export class ShopSettingInsuranceProviderComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  public insurance!: ShopInsuranceProvider | null;
  public form!: IFormHeaderModalProp;
  public validator = {
    providerNo: false,
    provider: false,
  };

  public healthFundSelection!: NameValuePairType[];
  public selectedHealthFund!: NameValuePairType | undefined;

  constructor(
    private _modalCtrl: ModalController,
    private _global: GlobalService,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _insurance: PrivateHealthInsuranceListService
  ) {
    this.healthFundSelection = this._insurance.get();
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.insuranceprovider';
    this.form.readOnly = false;
  }

  ngOnInit() {
    this._shopSetting.setting$.pipe(takeUntil(this._destroy$)).subscribe(s => {
      if (s !== null) {
        this.insurance = s.insurance;
        this.setInsuranceFund();
      }
    });
  }

  onChangeProviderOption() {
    this.insurance =
      this.insurance !== null
        ? null
        : {
            healthFund: Constant.Medical.Insurance.Medibank,
            provider: '',
            providerNo: '',
          };
    this.selectedHealthFund =
      this.insurance !== null
        ? { name: Constant.Medical.Insurance.Medibank, value: Constant.Medical.Insurance.Medibank }
        : undefined;
    this.validator.provider = this.insurance !== null ? false : true;
    this.validator.providerNo = this.insurance !== null ? false : true;
    this.handleEnabledSaveBtn();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }
  public handleEdit() {
    this.form.readOnly = false;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const saved = await this._shopSetting.updateInsuranceProvider(this.insurance);
    if (!saved) {
      this.form.enabledSavebutton = true;
    } else {
      await this.dismiss();
    }
  }

  public onChangeSelectedProvider() {
    if (this.insurance && this.selectedHealthFund) {
      this.insurance.healthFund = this.selectedHealthFund.name as MedicalInsuranceType;
    }
    this.handleEnabledSaveBtn();
  }

  public handleEnabledSaveBtn() {
    this.form.enabledSavebutton = this.validator.provider && this.validator.providerNo;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private setInsuranceFund() {
    if (this.insurance) {
      const selectedFund = this.insurance.healthFund;
      this.selectedHealthFund = { name: selectedFund, value: selectedFund };
    }
  }
}
