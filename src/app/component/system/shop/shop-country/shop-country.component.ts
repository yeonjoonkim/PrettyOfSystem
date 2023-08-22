import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IShopCountry } from 'src/app/interface/system/shop/shop.interface';
import { IPairValueId } from 'src/app/interface/system/system.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from 'src/app/service/global/global-constant';

@Component({
  selector: 'shop-country',
  templateUrl: './shop-country.component.html',
  styleUrls: ['./shop-country.component.scss'],
})
export class ShopCountryComponent implements OnInit {
  @Output() shopCountryChange = new EventEmitter<IShopCountry>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = false;
  @Input() defaultShopCountryList: IShopCountry[] = [];
  @Input()
  get shopCountry(): IShopCountry {
    return this.selectedShopCountry;
  }
  set shopCountry(value: IShopCountry) {
    this.selectedShopCountry = value;
    this.shopCountryChange.emit(this.selectedShopCountry);
  }
  @Input()
  get validate(): boolean {
    return this.validated;
  }
  set validate(value: boolean) {
    this.validated = value;
    this.validateChange.emit(this.validated);
  }
  public loading: boolean = true;
  public pairValueIdList: IPairValueId[] = [];
  public selectedPairValueId: IPairValueId | undefined;
  private selectedShopCountry!: IShopCountry;

  private validated: boolean = false;

  constructor(private systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.defaultShopCountryList = !this.readOnly
      ? await this.systemShopService.getSystemShopCountryList()
      : [];
    this.pairValueIdList = await this.systemShopService.getCountryPairValueIdList();
    this.setDefaultPairValueId();
  }

  private setDefaultPairValueId() {
    let isEnabledId: boolean = this.selectedShopCountry?.id !== undefined;
    let defaultPair = isEnabledId
      ? this.pairValueIdList.find(p => p.id === this.selectedShopCountry.id)
      : this.pairValueIdList.find(p => p.value === 'country');
    this.selectedPairValueId = defaultPair;
    this.validate = defaultPair !== undefined;
    this.loading = false;
  }

  public onClickCountry() {
    let country: IShopCountry | undefined = this.defaultShopCountryList.find(
      c => c.id === this.selectedPairValueId?.id
    );
    this.validate = country !== undefined;
    if (this.validate && country) {
      this.shopCountry = country;
    }
  }
}
