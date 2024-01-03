import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IFormHeaderModalProp,
  NameValuePairType,
  ShopCountryType,
  ShopServiceModalDocumentProp,
  ShopServiceOptionType,
} from 'src/app/interface';
import { NavParams } from '@ionic/angular';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';
import { ModalController } from '@ionic/angular';
import { ShopServiceManagementService } from 'src/app/service/shop/shop-service-management/shop-service-management.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'shop-service',
  templateUrl: './shop-service.component.html',
  styleUrls: ['./shop-service.component.scss'],
})
export class ShopServiceComponent implements OnInit, OnDestroy {
  private _configSubscription!: Subscription;
  public country!: ShopCountryType;
  public form!: IFormHeaderModalProp;
  public current!: ShopServiceModalDocumentProp;
  public extraSelection: NameValuePairType[] = [];
  public selectedExtras: NameValuePairType[] = [];
  public hasInsuranceProvider$!: Observable<boolean>;
  public hasNotInsuranceProvider$!: Observable<boolean>;
  public isRelatedToMedical$!: Observable<boolean>;
  private _before!: ShopServiceModalDocumentProp;

  public validator = {
    title: false,
    description: false,
  };
  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _shopService: ShopServiceManagementService
  ) {
    this.hasInsuranceProvider$ = this._shopService.hasInsuranceProvider$;
    this.hasNotInsuranceProvider$ = this._shopService.hasNotInsuranceProvider$;
    this.isRelatedToMedical$ = this._shopService.isRelatedToMedical$;
  }

  ngOnDestroy() {
    this._configSubscription?.unsubscribe();
  }

  async ngOnInit() {
    await this.loadingFormCtrl();
    this._configSubscription = this._shopService.currentShopConfig$.subscribe(config => {
      if (config !== null) {
        this.country = config.country;
      }
    });
  }

  public onChangeExtra() {
    const id = this.selectedExtras.map(s => s.value);
    this.current.service.extraIds = id;
    this.handleEnabledSaveBtn();
  }

  public onChangeOption(option: ShopServiceOptionType) {
    const index = this.current.service.options.findIndex(s => s.min === option.min && s.price === s.price);
    option.min = option.min !== null && option.min > 180 ? 0 : option.min;
    option.price = option.price !== null ? option.price : 0;
    this.current.service.options[index] = option;
    this.handleEnabledSaveBtn();
  }

  public createOption() {
    const option: ShopServiceOptionType = { min: 0, price: 0 };
    const isAlreadyCreated = this.current.service.options.filter(o => o.min === 0 && o.price === 0).length > 0;
    if (!isAlreadyCreated) {
      this.current.service.options.unshift(option);
    }
    this.handleEnabledSaveBtn();
  }

  public deleteOption(option: ShopServiceOptionType) {
    const index = this.current.service.options.findIndex(s => s.min === option.min && s.price === option.price);

    if (index !== -1) {
      this.current.service.options.splice(index, 1);
      this.current.service.options.sort((a, b) => a.min - b.min);
    }
    this.handleEnabledSaveBtn();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public async handleCreate() {
    this.current.service.options.sort((a, b) => a.min - b.min);
    this.form.enabledSavebutton = false;
    const created = await this._shopService.add(this.current.service);
    if (created) {
      await this.dismiss();
    }
    this.form.enabledSavebutton = true;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const saved = await this._shopService.update(this.current.service);
    if (saved) {
      await this.dismiss();
    }
    this.form.enabledSavebutton = true;
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public async handleDelete() {
    this.form.enabledSavebutton = false;
    const deleted = await this._shopService.delete(this.current.service);
    if (deleted) {
      await this.dismiss();
    }
    this.form.enabledSavebutton = true;
  }

  public handleInsurance() {
    this.handleEnabledSaveBtn();
  }

  public handleEnabledSaveBtn() {
    let isOptionAvailable = true;
    if (this.current.service.options.length > 0) {
      this.current.service.options.forEach(op => {
        if (op.min === 0 || op.price === 0) {
          isOptionAvailable = false;
        }
      });
    } else {
      isOptionAvailable = false;
    }

    this.form.enabledSavebutton =
      this.validator.title &&
      this.validator.description &&
      this.current.service.relatedService.value.length > 0 &&
      isOptionAvailable;
  }

  public onChangeTitleProp() {
    this.handleEnabledSaveBtn();
  }

  public onChangeDescriptionProp() {
    this.handleEnabledSaveBtn();
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(Constant.Default.ComponentMode.Form);
    const prop: ShopServiceModalDocumentProp | undefined = this._navParams.get('prop');
    if (formProp !== undefined && prop !== undefined) {
      this._before = cloneDeep(prop);
      this.current = cloneDeep(prop);
      this.form = cloneDeep(formProp);
      this.extraSelection = this.current.extraFilter;
      this.selectedExtras = this.extraSelection.filter(s => this.current.service.extraIds.includes(s.value));
    } else {
      await this._modalCtrl.dismiss();
    }
  }
}
