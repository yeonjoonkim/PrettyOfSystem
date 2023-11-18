import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopExtraDocumentType, ShopPackageExtraType } from 'src/app/interface';

@Component({
  selector: 'shop-package-extra-popover',
  templateUrl: './shop-package-extra-popover.component.html',
  styleUrls: ['./shop-package-extra-popover.component.scss'],
})
export class ShopPackageExtraPopoverComponent implements OnInit {
  public packageExtras: ShopPackageExtraType[] = [];
  public extras: ShopExtraDocumentType[] = [];
  constructor(
    private _navParams: NavParams,
    private _popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.loadingParam();
  }

  handleExtra(extra: ShopExtraDocumentType) {
    const isSelected = this.isSelectedExtra(extra.id);
    if (isSelected) {
      this.packageExtras = this.packageExtras.filter(ex => !(ex.id === extra.id));
    } else {
      const newExtra: ShopPackageExtraType = {
        id: extra.id,
        title: extra.title,
        price: extra.price,
      };
      this.packageExtras.push(newExtra);
    }
  }

  isSelectedExtra(extraId: string | undefined) {
    const selected = this.packageExtras?.find(ex => ex.id === extraId);
    return selected !== undefined ? true : false;
  }

  public async apply() {
    await this._popoverCtrl.dismiss({ packageExtras: this.packageExtras });
  }

  private async loadingParam() {
    const packageExtrasParam: ShopPackageExtraType[] | undefined = this._navParams.get('packageExtras');
    const extrasParam: ShopExtraDocumentType[] | undefined = this._navParams.get('extras');
    if (packageExtrasParam !== undefined && extrasParam !== undefined) {
      this.packageExtras = cloneDeep(packageExtrasParam);
      this.extras = cloneDeep(extrasParam);
    } else {
      await this._popoverCtrl.dismiss();
    }
  }
}
