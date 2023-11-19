import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { IFormHeaderModalProp, ShopConfigurationType, ShopUpdateContactProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';

@Component({
  selector: 'shop-setting-contact',
  templateUrl: './shop-setting-contact.component.html',
  styleUrls: ['./shop-setting-contact.component.scss'],
})
export class ShopSettingContactComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public config!: ShopConfigurationType;
  public form!: IFormHeaderModalProp;
  public validator = {
    name: false,
    phone: false,
    email: false,
    address: false,
    timezone: false,
    taxNumber: false,
  };
  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.information';
  }

  ngOnInit() {
    this._shopSetting.config$.pipe(takeUntil(this._destroy$)).subscribe(s => {
      if (s !== null) {
        this.config = s;
      }
    });
  }

  handleEnabledSaveBtn() {
    this.form.enabledSavebutton =
      this.validator.name &&
      this.validator.email &&
      this.validator.phone &&
      this.validator.address &&
      this.validator.taxNumber &&
      this.validator.timezone;
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const updateProp: ShopUpdateContactProp = {
      name: this.config.name,
      taxNumber: this.config.taxNumber,
      address: this.config.address,
      phone: this.config.phoneNumber,
      email: this.config.email,
    };
    const updated = await this._shopSetting.updateContact(updateProp);
    if (updated) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
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
