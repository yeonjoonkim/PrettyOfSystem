import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IShopCountry } from 'src/app/interface/shop/shop.interface';
import { PairNameValueType, PairValueIdType } from 'src/app/interface/global/global.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'shop-country',
  templateUrl: './shop-country.component.html',
  styleUrls: ['./shop-country.component.scss'],
})
export class ShopCountryComponent implements OnInit {
  @Output() shopCountryChange = new EventEmitter<IShopCountry>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = true;
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

  public pairNameValueList: PairNameValueType[] = [];
  public selectedPairNameValue: PairNameValueType | undefined;
  private selectedShopCountry!: IShopCountry;

  private validated: boolean = false;

  constructor(private systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.defaultShopCountryList = await this.systemShopService.getSystemShopCountryList();
    this.pairNameValueList = this.defaultShopCountryList.map(country => {
      return { name: country.name, value: country.id };
    });
    this.setDefaultPairValueId();
  }

  private setDefaultPairValueId() {
    let defaultPair = this.pairNameValueList.find(p => p.value === this.selectedShopCountry.id);
    this.selectedPairNameValue = defaultPair;
    this.validate = defaultPair !== undefined;
  }

  public onChangeCountry() {
    let country: IShopCountry | undefined = this.defaultShopCountryList.find(
      c => c.id === this.selectedPairNameValue?.value
    );
    this.validate = country !== undefined;
    if (this.validate && country) {
      this.shopCountry = country;
    }
  }
}
