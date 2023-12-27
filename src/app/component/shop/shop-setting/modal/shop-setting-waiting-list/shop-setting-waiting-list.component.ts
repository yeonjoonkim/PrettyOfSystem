import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { QRCodeComponent } from '@progress/kendo-angular-barcodes';
import { saveAs } from '@progress/kendo-file-saver';
import { IFormHeaderModalProp, NameValuePairType, ShopConfigurationType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import { UserRoleService } from 'src/app/service/user/user-role/user-role.service';

@Component({
  selector: 'shop-setting-waiting-list',
  templateUrl: './shop-setting-waiting-list.component.html',
  styleUrls: ['./shop-setting-waiting-list.component.scss'],
})
export class ShopSettingWaitingListComponent implements OnInit {
  @ViewChild('qrcode')
  private qrcode!: QRCodeComponent;
  private _prefix!: string;
  private _waitingListSessionId!: string;

  public form!: IFormHeaderModalProp;
  public selectedTimeoutSession: NameValuePairType = { name: 'label.title.5min', value: '5' };
  public selectedIntervalMin: NameValuePairType = { name: 'label.title.5min', value: '5' };
  public timeSelection: NameValuePairType[] = [
    { name: 'label.title.5min', value: '5' },
    { name: 'label.title.10min', value: '10' },
    { name: 'label.title.15min', value: '15' },
    { name: 'label.title.30min', value: '30' },
  ];
  public url: string = '';
  private _expiredMin: number = 5;
  private _intervalMin: number = 5;

  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _global: GlobalService,
    private _navParam: NavParams,
    public role: UserRoleService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.waitinglist';
    this._prefix = `${this._global.currentDomain()}/internal-api/waiting-list`;
  }

  async ngOnInit() {
    await this.loadParam();
  }

  public onChangeTimeoutSession() {
    const selectedMin = Number(this.selectedTimeoutSession.value);
    this._expiredMin = selectedMin;
  }

  public onChangeIntervalMin() {
    const selectedMin = Number(this.selectedIntervalMin.value);
    this._intervalMin = selectedMin;
  }

  public onRefreshQRCode() {
    const newId = this._global.newId();
    this._waitingListSessionId = newId;
    this.setQRCodeUrl(newId);
    this.handleEnabledSaveBtn();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public handleEdit() {
    this.form.readOnly = false;
    this.handleEnabledSaveBtn();
  }

  private handleEnabledSaveBtn() {
    const mins = [5, 10, 15, 30];
    const id = this._waitingListSessionId !== undefined && this._waitingListSessionId.length > 0;
    this.form.enabledSavebutton = mins.includes(this._expiredMin) && id && mins.includes(this._intervalMin);
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopSetting.updateWaitingList(
      this._intervalMin,
      this._expiredMin,
      this._waitingListSessionId
    );
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async exportPNG() {
    const qrCode = await this.qrcode.exportImage();
    saveAs(qrCode, 'Waiting-List.png');
  }

  private async loadParam() {
    const config: ShopConfigurationType | undefined = await this._navParam.get('config');
    if (config !== undefined) {
      this._expiredMin = config.setting.qrCode.waitingListSessionExiryMin;
      this._intervalMin = config.setting.waitingList.intervalMin;

      //Timeout
      this.setTimeoutSession(this._expiredMin);
      this._waitingListSessionId = config.waitingListSessionId;

      //Interval Min
      this.setIntervalMin(this._intervalMin);

      //QR code
      this.setQRCodeUrl(this._waitingListSessionId);
      this.handleEnabledSaveBtn();
    } else {
      await this.dismiss();
    }
  }

  private setQRCodeUrl(id: string) {
    this.url = `${this._prefix}/${id}`;
  }

  private setTimeoutSession(expiredMin: number) {
    const selected = this.timeSelection.find(s => s.value === expiredMin.toString());
    if (selected) {
      this.selectedTimeoutSession = selected;
    }
    this.handleEnabledSaveBtn();
  }

  private setIntervalMin(intervalMin: number) {
    const selected = this.timeSelection.find(s => s.value === intervalMin.toString());
    if (selected) {
      this.selectedIntervalMin = selected;
    }
    this.handleEnabledSaveBtn();
  }
}
