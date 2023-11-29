import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QRCodeComponent } from '@progress/kendo-angular-barcodes';
import { saveAs } from '@progress/kendo-file-saver';
import { Subject, takeUntil } from 'rxjs';
import { IFormHeaderModalProp, NameValuePairType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'shop-setting-waiting-list',
  templateUrl: './shop-setting-waiting-list.component.html',
  styleUrls: ['./shop-setting-waiting-list.component.scss'],
})
export class ShopSettingWaitingListComponent implements OnInit {
  @ViewChild('qrcode')
  private _qrcode!: QRCodeComponent;
  private readonly _prefix: string = `https://${window.location.hostname}/internal-api/waiting-list`;
  private _destroy$ = new Subject<void>();
  private _waitingListSessionId!: string;

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
    this.form.headerTitle = 'label.title.waitinglist';
  }

  ngOnInit() {
    this._shopSetting.config$.pipe(takeUntil(this._destroy$)).subscribe(config => {
      if (config !== null) {
        this._expiredMin = config.setting.qrCode.waitingListSessionExiryMin;
        this.setTimeoutSession(this._expiredMin);
        this._waitingListSessionId = config.waitingListSessionId;
        this.setQRCodeUrl(this._waitingListSessionId);
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
    this._waitingListSessionId = newId;
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
    const id = this._waitingListSessionId !== undefined && this._waitingListSessionId.length > 0;
    this.form.enabledSavebutton = expiredMins.includes(this._expiredMin) && id;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updated = await this._shopSetting.updateWaitingList(this._expiredMin, this._waitingListSessionId);
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public exportPNG() {
    this._qrcode.exportImage().then(dataURI => {
      saveAs(dataURI, 'Waiting-List.png');
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public isLoading() {
    return this._waitingListSessionId === undefined && this._expiredMin === undefined && this.form === undefined;
  }
}
