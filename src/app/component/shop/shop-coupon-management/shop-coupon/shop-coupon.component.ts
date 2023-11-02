import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {
  IFormHeaderModalProp,
  NameValuePairType,
  ShopCouponModalProp,
  ShopServiceDocumentType,
  ShopServiceOptionType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';
import { ShopCouponManagementService } from 'src/app/service/shop/shop-coupon-management/shop-coupon-management.service';
@Component({
  selector: 'app-shop-coupon',
  templateUrl: './shop-coupon.component.html',
  styleUrls: ['./shop-coupon.component.scss'],
})
export class ShopCouponComponent implements OnInit {
  private _before!: ShopCouponModalProp;
  public current!: ShopCouponModalProp;
  public form!: IFormHeaderModalProp;
  public discountTypes: NameValuePairType[] = [{ name: 'label.title.percent', value: 'Percent' }];
  public selectedDiscount: NameValuePairType = { name: 'label.title.percent', value: 'Percent' };
  public selectedServiceFilter: NameValuePairType = { name: '', value: '' };
  public selectedServiceOptions!: ShopServiceOptionType[];

  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _global: GlobalService,
    private _couponSvc: ShopCouponManagementService
  ) {}

  async ngOnInit() {
    await this.loadingFormCtrl();
  }

  public isSelectedOption(option: ShopServiceOptionType) {
    return (
      this.current.coupon.option.min === option.min &&
      this.current.coupon.option.price === option.price
    );
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public async handleCreate() {
    this.form.enabledSavebutton = false;
    const created = await this._couponSvc.add(this.current.coupon);
    if (created) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._couponSvc.update(this.current.coupon);
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async handleDelete() {
    this.form.enabledSavebutton = false;
    const deleted = await this._couponSvc.delete(this.current.coupon);
    if (deleted) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }
  public handleEnabledSaveBtn() {
    this.form.enabledSavebutton = this.enableSaveBtn();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public onChangeServiceFilter() {
    const id = this.selectedServiceFilter.value;
    const service = this.current.services.find(s => s.id === id);
    if (service) {
      this.resetByServiceFilter(service);
      this.selectedServiceOptions = service.options;
    }
    this.handleEnabledSaveBtn();
  }

  public onServiceOptionChange(option: ShopServiceOptionType) {
    this.current.coupon.option = option;
    this.updatePrice();
    this.handleEnabledSaveBtn();
  }

  public onChangeNumOfCoupon() {
    this.current.coupon.numOfCoupon = this._global.numberTransform.nullReplaceToZero(
      this.current.coupon.numOfCoupon
    );
    this.current.coupon.numOfCoupon =
      this.current.coupon.numOfCoupon > 0 ? this.current.coupon.numOfCoupon : 1;
    this.updatePrice();
    this.handleEnabledSaveBtn();
  }

  public onChangeDiscountRate() {
    this.updatePrice();
    this.handleEnabledSaveBtn();
  }

  public onChangeExpiryMonth() {
    this.current.coupon.expiryMonth = this._global.numberTransform.nullReplaceToZero(
      this.current.coupon.expiryMonth
    );
    this.current.coupon.expiryMonth =
      this.current.coupon.expiryMonth > 0 ? this.current.coupon.expiryMonth : 1;
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(
      Constant.Default.ComponentMode.Form
    );
    const prop: ShopCouponModalProp | undefined = this._navParams.get('prop');

    if (formProp !== undefined && prop !== undefined) {
      this.form = cloneDeep(formProp);
      this._before = cloneDeep(prop);
      this.current = cloneDeep(prop);

      const serviceFilter = this.current.serviceFilters.find(
        f => f.value === this.current.coupon.serviceId
      );
      const service = this.current.services.find(s => s.id === this.current.coupon.serviceId);

      if (serviceFilter && service) {
        this.selectedServiceFilter = serviceFilter;
        this.selectedServiceOptions = service.options;
      }
      this.handleEnabledSaveBtn();
    } else {
      await this.dismiss();
    }
  }

  private resetByServiceFilter(service: ShopServiceDocumentType) {
    this.current.coupon.originalPrice = 0;
    this.current.coupon.discountPrice = 0;
    this.current.coupon.discountAmount = 0;
    this.current.coupon.option.min = 0;
    this.current.coupon.option.price = 0;
    this.current.coupon.serviceId = service.id;
    this.current.coupon.title = service.title;
    this.current.coupon.description = service.description;
    this.current.coupon.titleProp = service.titleProp;
  }

  private updatePrice() {
    this.current.coupon = this._couponSvc.priceCalculator.updatePrice(this.current.coupon);
  }

  private enableSaveBtn() {
    return (
      this.current.coupon.serviceId.length > 0 &&
      this.current.coupon.title.length > 0 &&
      this.current.coupon.description.length > 0 &&
      this.current.coupon.titleProp.length > 0 &&
      this.current.coupon.originalPrice > 0 &&
      this.current.coupon.discountPrice > 0 &&
      this.current.coupon.option.min > 0 &&
      this.current.coupon.option.price > 0 &&
      this.current.coupon.numOfCoupon > 0 &&
      this.current.coupon.expiryMonth > 0
    );
  }
}
