import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IShopCategory } from 'src/app/interface/shop/shop.interface';
import { PairNameValueType, PairValueIdType } from 'src/app/interface/global/global.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
})
export class ShopCategoryListComponent implements OnInit {
  @Output() shopCategoryChange = new EventEmitter<IShopCategory>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = false;
  @Input()
  get shopCategory(): IShopCategory {
    return this.selectedShopCategory;
  }
  set shopCategory(value: IShopCategory) {
    this.selectedShopCategory = value;
    this.shopCategoryChange.emit(this.selectedShopCategory);
  }
  @Input()
  get validate(): boolean {
    return this.validated;
  }
  set validate(value: boolean) {
    this.validated = value;
    this.validateChange.emit(this.validated);
  }
  private defaultShopCategoryList: IShopCategory[] = [];
  public loading: boolean = true;
  public pairNameValueList: PairNameValueType[] = [];
  public selectedPairNameValue!: PairNameValueType | undefined;
  private validated: boolean = false;
  private selectedShopCategory: IShopCategory = {
    id: '',
    name: '',
    isHairSalon: false,
    isMassageTheraphy: false,
    isPersonalTrainning: false,
    isSkinCare: false,
    isMobileShop: false,
  };

  constructor(private systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.defaultShopCategoryList = await this.systemShopService.getSystemShopCategoryList();
    this.pairNameValueList = this.defaultShopCategoryList.map(category => {
      return { name: category.name, value: category.id };
    });
    this.setDefaultPairNameValue();
  }

  private setDefaultPairNameValue() {
    let defaultPair: PairNameValueType | undefined = this.pairNameValueList.find(
      p => p.value === this.selectedShopCategory.id
    );
    this.selectedPairNameValue = defaultPair;
    this.validate = defaultPair !== undefined;
    this.loading = false;
  }

  public onClickCategory() {
    let id: string | undefined = this.selectedPairNameValue?.value;
    let category: IShopCategory | undefined = this.defaultShopCategoryList.find(c => c.id === id);
    if (id !== undefined && category !== undefined) {
      this.validate = category !== undefined;
      this.shopCategory = category;
    }
  }
}
