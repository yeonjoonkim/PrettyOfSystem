import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopCountryType } from 'src/app/interface/shop/shop.interface';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { SystemShopService } from 'src/app/service/system/system-shop/system-shop.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'shop-country',
  templateUrl: './shop-country.component.html',
  styleUrls: ['./shop-country.component.scss'],
})
export class ShopCountryComponent implements OnInit {
  @Output() shopCountryChange = new EventEmitter<ShopCountryType>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() mode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() readOnly: boolean = true;
  @Input() defaultShopCountryList: ShopCountryType[] = [];
  @Input()
  get shopCountry(): ShopCountryType {
    return this._selectedShopCountry;
  }
  set shopCountry(value: ShopCountryType) {
    this._selectedShopCountry = value;
    this.shopCountryChange.emit(this._selectedShopCountry);
  }
  @Input()
  get validate(): boolean {
    return this._validated;
  }
  set validate(value: boolean) {
    this._validated = value;
    this.validateChange.emit(this._validated);
  }

  public pairNameValueList: NameValuePairType[] = [];
  public selectedPairNameValue: NameValuePairType | undefined;
  private _selectedShopCountry!: ShopCountryType;
  private _validated: boolean = false;

  constructor(private _systemShopService: SystemShopService) {}

  async ngOnInit() {
    this.defaultShopCountryList = await this._systemShopService.getSystemShopCountryList();
    this.pairNameValueList = this.defaultShopCountryList.map(country => {
      return { name: country.name, value: country.id };
    });
    this.setDefaultPairValueId();
  }

  private setDefaultPairValueId() {
    let defaultPair = this.pairNameValueList.find(p => p.value === this._selectedShopCountry.id);
    this.selectedPairNameValue = defaultPair;
    this.validate = defaultPair !== undefined;
  }

  public onChangeCountry() {
    let country: ShopCountryType | undefined = this.defaultShopCountryList.find(
      c => c.id === this.selectedPairNameValue?.value
    );
    this.validate = country !== undefined;
    if (this.validate && country) {
      this.shopCountry = country;
    }
  }
}
