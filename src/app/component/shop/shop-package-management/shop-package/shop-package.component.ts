import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {
  IFormHeaderModalProp,
  NameValuePairType,
  ShopPackageExtraType,
  ShopPackageModalDocumentProp,
  ShopPackageServiceType,
  TimeItemType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';
import { ShopPackageManagementService } from 'src/app/service/shop/shop-package-management/shop-package-management.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'shop-package',
  templateUrl: './shop-package.component.html',
  styleUrls: ['./shop-package.component.scss'],
})
export class ShopPackageComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public discountTypes: NameValuePairType[] = [
    { name: 'label.title.percent', value: 'Percent' },
    { name: 'label.title.dollar', value: 'Dollar' },
  ];
  public selectedDiscount: NameValuePairType = { name: 'label.title.percent', value: 'Percent' };
  public current!: ShopPackageModalDocumentProp;
  public daySelection!: NameValuePairType[];
  public selectedDays!: NameValuePairType[];
  public validator = {
    limitedTime: true,
    services: false,
    title: false,
    price: false,
  };
  public hasInsuranceProvider$!: Observable<boolean>;
  public hasNotInsuranceProvider$!: Observable<boolean>;
  private _before!: ShopPackageModalDocumentProp;
  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _global: GlobalService,
    private _shopPackage: ShopPackageManagementService
  ) {
    this.hasInsuranceProvider$ = this._shopPackage.hasInsuranceProvider$;
    this.hasNotInsuranceProvider$ = this._shopPackage.hasNotInsuranceProvider$;
  }

  async ngOnInit() {
    this.loadingFormCtrl();
  }

  public handleEnabledSaveBtn() {
    this.validator.limitedTime =
      this.current.package.limitedTime !== null
        ? this._shopPackage.limitedTime.validator(
            this.current.package.limitedTime.start,
            this.current.package.limitedTime.end
          )
        : true;
    this.validator.title = this.current.package.titleProp.length > 2;
    this.validator.price = this.current.package.discountPrice > 0;
    this.validator.services = this.current.package.services.length > 0;

    this.form.enabledSavebutton =
      this.validator.limitedTime && this.validator.title && this.validator.price && this.validator.services;
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public isCompletedRequest(serviceId: string) {
    const titleRequest = this.current.translateRequests?.find(
      s => s.serviceId === serviceId && s.format === Constant.Text.Format.Title
    );
    return titleRequest !== undefined ? titleRequest.status === Constant.API.TranslateStatus.Completed : false;
  }

  public async handleCreate() {
    this.form.enabledSavebutton = false;
    const created = await this._shopPackage.add(this.current.package);
    if (created) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopPackage.update(this.current.package);
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public async handleDelete() {
    this.form.enabledSavebutton = false;
    const deleted = await this._shopPackage.delete(this.current.package);
    if (deleted) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public onClickLimitedTime() {
    if (this.current.package.limitedTime != null) {
      this.current.package.limitedTime = null;
    } else {
      this.current.package.limitedTime = this._shopPackage.limitedTime.get(this.current.operatingHours);
    }
    this.handleEnabledSaveBtn();
  }

  public onChangeDiscount() {
    this.current.package.discount.type = this.selectedDiscount.value as Constant.PackageDiscountType;
    this.current.package.discount.value = 0;
    this.onChangeDiscountRate();
  }

  public onChangeDiscountRate() {
    this.updatePrice();
    this.handleEnabledSaveBtn();
  }

  public async onClickEditService(event: any) {
    const popover = await this._shopPackage.popover.getServicePopover(
      event,
      this.current.package.services,
      this.current.services
    );
    await popover.present();
    const result = await popover.onWillDismiss();
    if (result.data !== undefined) {
      const packageServices: ShopPackageServiceType[] = result.data.packageServices;
      this.current.package.services = packageServices;
      this.updatePrice();
    }

    this.handleEnabledSaveBtn();
  }

  public async onClickEditExtra(event: any) {
    const popover = await this._shopPackage.popover.getExtraPopover(
      event,
      this.current.package.extras,
      this.current.extras
    );
    await popover.present();
    const result = await popover.onWillDismiss();
    if (result.data !== undefined) {
      const packageExtras: ShopPackageExtraType[] = result.data.packageExtras;
      this.current.package.extras = packageExtras;
      this.updatePrice();
    }
  }

  public onChangeLimitedDay() {
    const days = this.selectedDays.map(d => {
      return Number(d.value);
    }) as Constant.DayIndexType[];

    if (this.current.package.limitedTime !== null) {
      this.current.package.limitedTime.offeredDateIndex = days;
    }
  }

  public onChangeLimitedStartTime(time: TimeItemType) {
    if (this.current.package.limitedTime !== null) {
      this.current.package.limitedTime.start = time;
      this.handleEnabledSaveBtn();
    }
  }

  public onChangeLimitedEndTime(time: TimeItemType) {
    if (this.current.package.limitedTime !== null) {
      this.current.package.limitedTime.end = time;
      this.handleEnabledSaveBtn();
    }
  }

  public isSelectedService(serviceId: string | undefined, min: number | undefined, price: number | undefined) {
    const selected = this.current.package.services?.find(
      s => s.id === serviceId && s.option.min === min && s.option.price === price
    );
    return selected !== undefined ? true : false;
  }

  public isSelectedServiceTitle(serviceId: string | undefined) {
    const selected = this.current.package.services?.filter(s => s.id === serviceId).length > 0;
    return selected;
  }

  public isSelectedExtra(extraId: string | undefined) {
    const selected = this.current.package.extras?.find(ex => ex.id === extraId);
    return selected !== undefined ? true : false;
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(Constant.Default.ComponentMode.Form);
    const prop: ShopPackageModalDocumentProp | undefined = this._navParams.get('prop');

    if (formProp !== undefined && prop !== undefined) {
      this.form = cloneDeep(formProp);
      this._before = cloneDeep(prop);
      this.current = cloneDeep(prop);
      const discountType = this.discountTypes.find(t => t.value === this.current.package.discount.type);
      this.selectedDiscount = discountType !== undefined ? discountType : this.selectedDiscount;
      this.setDaySelection(prop);
      this.handleEnabledSaveBtn();
    } else {
      await this.dismiss();
    }
  }

  private setDaySelection(prop: ShopPackageModalDocumentProp) {
    const time = this._shopPackage.limitedTime.get(prop.operatingHours);
    const days = this._shopPackage.limitedTime.days;
    const available = time !== null ? time.offeredDateIndex.map(s => s.toString()) : [];
    this.daySelection = available.length > 0 ? days.filter(d => available.includes(d.value)) : days;
    if (this.current.package.limitedTime != null) {
      const offerdays = this.current.package.limitedTime.offeredDateIndex.map(s => s.toString());
      this.selectedDays =
        this.current.package.limitedTime.offeredDateIndex.length > 0
          ? days.filter(
              s =>
                this.current.package.limitedTime?.offeredDateIndex.includes(
                  Number(s.value) as Constant.DayIndexType
                )
            )
          : [];
    } else {
      this.selectedDays = [];
    }
  }

  private updatePrice() {
    this.current.package.discount.value = this._global.numberTransform.nullReplaceToZero(
      this.current.package.discount.value
    );
    this.current.package = this._shopPackage.priceCalculator.updatePrice(this.current.package);
    this.handleEnabledSaveBtn();
  }
}
