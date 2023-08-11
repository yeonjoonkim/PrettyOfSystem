import { IFormHeaderModalProp } from './../../../../interface/global/global.interface';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IShopConfiguration } from 'src/app/interface/system/shop/shop.interface';
import * as Constant from './../../../../shared/services/global/global-constant';
import {
  IShopConfigurationDisplayOption,
  IShopConfigurationValidator,
  ShopConfigurationService,
} from 'src/app/service/system/system-shop/shop-configuration/shop-configuration.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'shop-configuration',
  templateUrl: './shop-configuration.component.html',
  styleUrls: ['./shop-configuration.component.scss'],
})
//TODO: ADD USER VERIFICATION
export class ShopConfigurationComponent implements OnInit, AfterViewInit {
  public planPrice: number = 0;
  public form!: IFormHeaderModalProp;
  public timeZoneList: Constant.TimeZoneType[] = Object.values(Constant.TimeZone);
  public validator: IShopConfigurationValidator = this.shopConfig.defaultValidator();
  public display: IShopConfigurationDisplayOption = this.shopConfig.defaultShopDisplayOption();
  public config: IShopConfiguration = this.shopConfig.setDefaultConfig();
  private selectedconfig!: IShopConfiguration | undefined;

  constructor(private shopConfig: ShopConfigurationService, private navParams: NavParams, private modalCtrl: ModalController) {
    this.loadingFormCtrl();
  }

  ngOnInit() {
    this.autoPaymentDateCalculation();
  }

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
    this.selectedconfig = this.navParams.get('config');
    this.form = form ? form : { readOnly: true, headerTitle: '', action: Constant.Default.FormAction.Read, enabledSavebutton: false};
    this.config = this.selectedconfig ? this.selectedconfig : this.shopConfig.setDefaultConfig();
  }

  public async onPlanPeriodChange(){
   let newPaymentDate = this.shopConfig.global.date.transform.addDay(this.config.plan.lastPaymentDate, this.config.plan.period.day);
   this.config.plan.paymentDate =  newPaymentDate.toUTCDate();
  }

  public onClickInfo(): void {
    this.display = this.shopConfig.displayInfo();
  }

  public onClickHours(): void{
    this.display = this.shopConfig.displayWorkHours();
  }

  public onClickAddress(): void {
    this.display = this.shopConfig.displayAddress();
  }

  public onClickSubscription(): void {
    this.display = this.shopConfig.displaySubscription();
  }

  public autoPaymentDateCalculation(){
    if(this.form.action === Constant.Default.FormAction.Create){
      this.onPlanPeriodChange();
    }
  }

  public async onChangePlan(){
    if(this.config.plan.configurationId){
      this.planPrice = await this.shopConfig.getSelectedTotalPrice(this.config.plan.configurationId, this.config.plan.period);
    }
  }

  public dismiss(){
    this.modalCtrl.dismiss(this.config, 'cancel');
  }

  public async handleEdit(){
    this.form.readOnly = false;
    this.validator = this.shopConfig.editValidator();
    await this.onChangeForm();
  }

  public async handleSave(){
    this.shopConfig.handleSave(this.config, this.form);
  }

  public async handleDelete(){
    this.shopConfig.handleDelete(this.config, this.form)
  }

  public async handleCreate(){
    this.shopConfig.handleCreate(this.config, this.form);
  }
}
