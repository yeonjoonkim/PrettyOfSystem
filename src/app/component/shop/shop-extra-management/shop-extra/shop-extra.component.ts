import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { IFormHeaderModalProp, ShopCountryType, ShopExtraDocumentType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopExtraManagementService } from 'src/app/service/shop/shop-extra-management/shop-extra-management.service';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'shop-extra',
  templateUrl: './shop-extra.component.html',
  styleUrls: ['./shop-extra.component.scss'],
})
export class ShopExtraComponent implements OnInit, OnDestroy {
  public form!: IFormHeaderModalProp;
  public current!: ShopExtraDocumentType;
  public country!: ShopCountryType;
  public validator = {
    price: false,
    title: false,
  };

  private _before!: ShopExtraDocumentType;
  private _onDestroy$ = new Subject<void>();
  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _global: GlobalService,
    private _shopExtra: ShopExtraManagementService
  ) {}

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  async ngOnInit() {
    this._shopExtra.currentShopConfig$.pipe(takeUntil(this._onDestroy$)).subscribe(config => {
      if (config !== null) {
        this.country = config.country;
      }
    });
    await this.loadingFormCtrl();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public handleEdit() {
    this.form.readOnly = false;
    this.validator.price = true;
    this.validator.title = true;
  }

  public async handleCreate() {
    this.form.enabledSavebutton = false;
    const create = await this._shopExtra.add(this.current);
    if (create) {
      await this.dismiss();
    }
    this.form.enabledSavebutton = true;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const saved = await this._shopExtra.update(this.current);
    if (saved) {
      await this.dismiss();
    }
    this.form.enabledSavebutton = true;
  }

  public async handleDelete() {
    this.form.enabledSavebutton = false;
    const deleted = await this._shopExtra.delete(this.current);
    if (deleted) {
      await this.dismiss();
    }
    this.form.enabledSavebutton = true;
  }

  public onChangePrice() {
    this.current.price =
      this.current.price !== null && this.current.price !== undefined ? this.current.price : 0;
    this.validator.price = this.current.price > 0;
    this.handleEnabledSaveBtn();
  }

  public onChangeTitle() {
    this.current.titleProp = this._global.textTransform.preCleansingTranslateProp(
      this.current.titleProp
    );
    this.validator.title = this.current.title.length > 1;
    this.handleEnabledSaveBtn();
  }

  public handleEnabledSaveBtn() {
    this.form.enabledSavebutton = this.validator.price && this.validator.title;
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(
      Constant.Default.ComponentMode.Form
    );
    const prop: ShopExtraDocumentType | undefined = this._navParams.get('prop');

    if (formProp !== undefined && prop !== undefined) {
      this._before = cloneDeep(prop);
      this.current = cloneDeep(prop);
      this.form = cloneDeep(formProp);
    } else {
      await this._modalCtrl.dismiss();
    }
  }
}
