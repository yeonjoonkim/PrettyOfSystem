import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IShopSetting } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'shop-setting-picture',
  templateUrl: './shop-setting-picture.component.html',
  styleUrls: ['./shop-setting-picture.component.scss'],
})
export class ShopSettingPictureComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  setting!: IShopSetting;
  form!: IFormHeaderModalProp;
  constructor(
    private _modalCtrl: ModalController,
    private _global: GlobalService,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.album';
  }

  ngOnInit() {
    this._shopSetting.setting$.pipe(takeUntil(this._destroy$)).subscribe(s => {
      if (s !== null) {
        this.setting = s;
      }
    });
  }

  handleEnabledSaveBtn() {}

  public async handleSave() {
    this.form.enabledSavebutton = false;
    this.form.enabledSavebutton = true;
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
