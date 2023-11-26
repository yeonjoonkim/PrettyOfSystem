import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QRCodeComponent, QRCodeOverlay } from '@progress/kendo-angular-barcodes';
import { saveAs } from '@progress/kendo-file-saver';
import { Subject, takeUntil } from 'rxjs';
import { IShopSetting, IFormHeaderModalProp, NameValuePairType, ShopConfigurationType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
@Component({
  selector: 'shop-setting-check-in',
  templateUrl: './shop-setting-check-in.component.html',
  styleUrls: ['./shop-setting-check-in.component.scss'],
})
export class ShopSettingCheckInComponent implements OnInit, OnDestroy {
  @ViewChild('qrcode')
  private _qrcode!: QRCodeComponent;
  private readonly _prefix: string = `https://${window.location.hostname}/internal-api/check-in`;
  private _destroy$ = new Subject<void>();
  private _otuId!: string;

  public form!: IFormHeaderModalProp;
  public selectedTimeoutSession!: NameValuePairType;
  public timeoutSessionSelection: NameValuePairType[] = [
    { name: 'label.title.5min', value: '5' },
    { name: 'label.title.10min', value: '10' },
    { name: 'label.title.15min', value: '15' },
    { name: 'label.title.30min', value: '30' },
  ];

  public url!: string;
  public _expiredMin!: number;

  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _global: GlobalService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.checkin';
  }

  ngOnInit() {
    this._shopSetting.config$.pipe(takeUntil(this._destroy$)).subscribe(config => {
      if (config !== null) {
        this._expiredMin = config.setting.qrCode.oneTimeCheckInUrlExpiryMin;
        this.setTimeoutSession(this._expiredMin);
        this._otuId = config.oneTimeCheckInUrlId;
        this.setQRCodeUrl(this._otuId);
        this.handleEnabledSaveBtn();
      }
    });
  }

  public onChangeTimeoutSession() {
    const selectedMin = Number(this.selectedTimeoutSession.value);
    this._expiredMin = selectedMin;
  }

  public onRefreshQRCode() {
    const newId = this._global.newId();
    this._otuId = newId;
    this.setQRCodeUrl(newId);
    this.handleEnabledSaveBtn();
  }

  private setQRCodeUrl(id: string) {
    this.url = `${this._prefix}/${id}`;
  }

  private setTimeoutSession(expiredMin: number) {
    const selected = this.timeoutSessionSelection.find(s => s.value === expiredMin.toString());
    if (selected) {
      this.selectedTimeoutSession = selected;
    }
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
    const expiredMins = [5, 10, 15, 30];
    const id = this._otuId !== undefined && this._otuId.length > 0;
    this.form.enabledSavebutton = expiredMins.includes(this._expiredMin) && id;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopSetting.updateCheckIn(this._expiredMin, this._otuId);
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public exportPNG() {
    this._qrcode.exportImage().then(dataURI => {
      saveAs(dataURI, 'Walk-In-QRcode.png');
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public isLoading() {
    return this._otuId === undefined && this._expiredMin === undefined && this.form === undefined;
  }
}
