import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopCategoryType } from 'src/app/interface/shop/shop.interface';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
})
export class ShopCategoryListComponent implements OnInit {
  @Output() shopCategoryChange = new EventEmitter<ShopCategoryType>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = false;
  @Input()
  get shopCategory(): ShopCategoryType {
    return this._selectedShopCategory;
  }
  set shopCategory(value: ShopCategoryType) {
    this._selectedShopCategory = value;
    this.shopCategoryChange.emit(this._selectedShopCategory);
  }
  @Input()
  get validate(): boolean {
    return this._validated;
  }
  set validate(value: boolean) {
    this._validated = value;
    this.validateChange.emit(this._validated);
  }

  public loading: boolean = true;
  public pairNameValueList: NameValuePairType[] = [];
  public selectedPairNameValue!: NameValuePairType | undefined;
  private _defaultShopCategoryList: ShopCategoryType[] = [];
  private _validated: boolean = false;
  private _selectedShopCategory: ShopCategoryType = {
    id: '',
    name: '',
    isHairSalon: false,
    isMassageTheraphy: false,
    isPersonalTrainning: false,
    isSkinCare: false,
    isNailArt: false,
    isMobileShop: false,
  };

  constructor(private _systemShopService: SystemShopService) {}

  async ngOnInit() {
    this._defaultShopCategoryList = await this._systemShopService.getSystemShopCategoryList();
    this.pairNameValueList = this._defaultShopCategoryList.map(category => {
      return { name: category.name, value: category.id };
    });
    this.setDefaultPairNameValue();
  }

  private setDefaultPairNameValue() {
    let defaultPair: NameValuePairType | undefined = this.pairNameValueList.find(
      p => p.value === this._selectedShopCategory.id
    );
    this.selectedPairNameValue = defaultPair;
    this.validate = defaultPair !== undefined;
    this.loading = false;
  }

  public onClickCategory() {
    let id: string | undefined = this.selectedPairNameValue?.value;
    let category: ShopCategoryType | undefined = this._defaultShopCategoryList.find(c => c.id === id);
    if (id !== undefined && category !== undefined) {
      this.validate = category !== undefined;
      this.shopCategory = category;
    }
  }
}
