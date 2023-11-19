import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, ShopCapacityType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { SystemShopCapacityService } from 'src/app/service/system/system-shop-capacity/system-shop-capacity.service';
import { cloneDeep } from 'lodash-es';
import { UserService } from 'src/app/service/user/user.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-shop-capacity',
  templateUrl: './shop-capacity.component.html',
  styleUrls: ['./shop-capacity.component.scss'],
})
export class ShopCapacityComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public type!: ShopCapacityType;
  public form!: IFormHeaderModalProp;
  public isSystemAdmin: boolean = false;

  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _global: GlobalService,
    private _capacity: SystemShopCapacityService,
    private _user: UserService
  ) {}

  async ngOnInit() {
    this._user.currentRole$.pipe(takeUntil(this._destroy$)).subscribe(u => {
      if (u !== null) {
        this.isSystemAdmin = u?.accessLevel.isSystemAdmin;
      }
    });
    await this.loadingFormCtrl();
  }

  public handleEnabledSaveBtn() {
    this.form.enabledSavebutton =
      this.type.limitedCoupon > 0 &&
      this.type.limitedExtra > 0 &&
      this.type.limitedPackage > 0 &&
      this.type.limitedProduct > 0 &&
      this.type.limitedService > 0 &&
      this.type.limitedUser > 0 &&
      this.type.name.length >= 4 &&
      this.type.name.length <= 100;
  }

  public onCouponChange() {
    this.type.limitedCoupon = this._global.numberTransform.nullReplaceToZero(this.type.limitedCoupon);
    this.type.limitedCoupon = this._global.numberTransform.roundToDecimalPlaces(this.type.limitedCoupon, 0);
    this.handleEnabledSaveBtn();
  }

  public onExtraChange() {
    this.type.limitedExtra = this._global.numberTransform.nullReplaceToZero(this.type.limitedExtra);
    this.type.limitedExtra = this._global.numberTransform.roundToDecimalPlaces(this.type.limitedExtra, 0);
    this.handleEnabledSaveBtn();
  }

  public onPackageChange() {
    this.type.limitedPackage = this._global.numberTransform.nullReplaceToZero(this.type.limitedPackage);
    this.type.limitedPackage = this._global.numberTransform.roundToDecimalPlaces(this.type.limitedPackage, 0);
    this.handleEnabledSaveBtn();
  }

  public onServiceChange() {
    this.type.limitedService = this._global.numberTransform.nullReplaceToZero(this.type.limitedService);
    this.type.limitedService = this._global.numberTransform.roundToDecimalPlaces(this.type.limitedService, 0);
    this.handleEnabledSaveBtn();
  }

  public onProductChange() {
    this.type.limitedProduct = this._global.numberTransform.nullReplaceToZero(this.type.limitedProduct);
    this.type.limitedProduct = this._global.numberTransform.roundToDecimalPlaces(this.type.limitedProduct, 0);
    this.handleEnabledSaveBtn();
  }

  public onUserChange() {
    this.type.limitedUser = this._global.numberTransform.nullReplaceToZero(this.type.limitedUser);
    this.type.limitedUser = this._global.numberTransform.roundToDecimalPlaces(this.type.limitedUser, 0);
    this.handleEnabledSaveBtn();
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public async handleCreate() {
    this.form.enabledSavebutton = false;
    const result = await this._capacity.add(this.type);
    if (result) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const result = await this._capacity.update(this.type);
    if (result) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async handleDelete() {
    this.form.enabledSavebutton = false;
    const result = await this._capacity.delete(this.type);
    if (result) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(Constant.Default.ComponentMode.Form);
    const type: ShopCapacityType | undefined = this._navParams.get('type');

    if (formProp !== undefined && type !== undefined) {
      this.form = cloneDeep(formProp);
      this.type = cloneDeep(type);
    } else {
      await this.dismiss();
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
