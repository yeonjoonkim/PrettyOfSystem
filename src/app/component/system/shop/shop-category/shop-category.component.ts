import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IShopCategory } from 'src/app/interface/system/shop/shop.interface';
import { IPairValueId } from 'src/app/interface/system/system.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from '../../../../shared/services/global/global-constant';

@Component({
  selector: 'shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
})
export class ShopCategoryListComponent implements OnInit {
  @Output() shopCategoryChange = new EventEmitter<IShopCategory>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType =
    Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = false;
  @Input()
  get shopCategory(): IShopCategory {
    return this.selectedShopCategory;
  }
  set shopCategory(value: IShopCategory) {
    this.selectedShopCategory = value;
    if(!this.loading){
    this.shopCategoryChange.emit(this.selectedShopCategory);
    }
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
  public pairValueIdList: IPairValueId[] = [];
  public selectedPairValueId: IPairValueId | undefined;
  private validated: boolean = false;
  private selectedShopCategory: IShopCategory = {
    id: '',
    name: '',
    isHairSalon: false,
    isMassageTheraphy: false,
    isPersonalTrainning: false,
    isSkinCare: false,
  };

  constructor(private systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.defaultShopCategoryList = !this.readOnly
      ? await this.systemShopService.getSystemShopCategoryList()
      : [];
    this.pairValueIdList =
      await this.systemShopService.getCategoryPairValueIdList();
    this.setDefaultPairValueId();
  }

  private setDefaultPairValueId() {
    let defaultPair: IPairValueId | undefined = this.pairValueIdList.find(
      (p) => p.id === this.selectedShopCategory.id
    );
    this.selectedPairValueId = defaultPair;
    this.validate = defaultPair !== undefined;
    this.loading = false;
  }

  public onClickCategory() {
    let category: IShopCategory | undefined = this.defaultShopCategoryList.find(
      (c) => c.id === this.selectedPairValueId?.id
    );
    if (category) {
      this.shopCategory = category;
      this.validate = category !== undefined;
    }
  }
}
