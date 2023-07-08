import { IFormHeaderModalProp } from './../../../../interface/global/global.interface';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import * as Constant from './../../../../shared/services/global/global-constant';
import {
  IShopConfigurationDisplayOption,
  IShopConfigurationValidator,
  ShopConfigurationService,
} from 'src/app/service/system/system-shop/shop-configuration/shop-configuration.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'shop-configuration',
  templateUrl: './shop-configuration.component.html',
  styleUrls: ['./shop-configuration.component.scss'],
})
export class ShopConfigurationComponent implements OnInit, AfterViewInit {
  public form!: IFormHeaderModalProp;
  public timeZoneList: Constant.TimeZoneType[] = Object.values(Constant.TimeZone);
  public config: IShopConfiguration = this.shopConfig.defaultShopConfig();
  public validator: IShopConfigurationValidator = this.shopConfig.defaultValidator();
  public display: IShopConfigurationDisplayOption = this.shopConfig.defaultShopDisplayOption();

  constructor(private shopConfig: ShopConfigurationService, private navParams: NavParams) {
    this.loadingFormCtrl();
  }

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.onChangeForm();
  }
  private async onChangeForm(): Promise<void>{
    setTimeout(() => {
      this.form.enabledSavebutton = this.shopConfig.formInputValidator(this.validator);
    });
  }
  private loadingFormCtrl(): void{
    let form: IFormHeaderModalProp = this.navParams.get(Constant.Default.ComponentMode.Form);
    this.form = form ? form : { readOnly: true, headerTitle: '', action: Constant.Default.FormAction.Read, enabledSavebutton: false};
  }

  public onClickInfo(): void {
    this.display = this.shopConfig.displayInfo();
  }

  public onClickAddress(): void {
    this.display = this.shopConfig.displayAddress();
  }

  public onClickSubscription(): void {
    this.display = this.shopConfig.displaySubscription();
  }

  public dismiss(){
    this.shopConfig.global.modal.dismiss();
  }
}
