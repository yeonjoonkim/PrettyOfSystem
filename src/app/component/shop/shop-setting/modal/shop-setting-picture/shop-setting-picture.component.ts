import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IShopSetting, ShopConfigurationType } from 'src/app/interface';
import { ShopSettingService } from 'src/app/service/shop/shop-setting/shop-setting.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'shop-setting-picture',
  templateUrl: './shop-setting-picture.component.html',
  styleUrls: ['./shop-setting-picture.component.scss'],
})
export class ShopSettingPictureComponent implements OnInit {
  private _logoFile!: File | undefined;
  private _image1File!: File | undefined;
  private _image2File!: File | undefined;
  private _image3File!: File | undefined;

  public setting!: IShopSetting;
  public form!: IFormHeaderModalProp;
  public before!: IShopSetting;
  public logo: boolean = false;
  public image1: boolean = false;
  public image2: boolean = false;
  public image3: boolean = false;

  constructor(
    private _modalCtrl: ModalController,
    private _shopSetting: ShopSettingService,
    private _formCtrl: FormControllerService,
    private _navParam: NavParams
  ) {
    this.form = this._formCtrl.setEditFormHeaderModalProp();
    this.form.headerTitle = 'label.title.album';
  }

  async ngOnInit() {
    await this.loadParam();
  }

  public async onChangeLogoImage(file: File) {
    this._logoFile = file;
    this.form.enabledSavebutton = true;
  }

  public async onChangeImage1(file: File) {
    this._image1File = file;
    this.form.enabledSavebutton = true;
  }

  public async onChangeImage2(file: File) {
    this._image2File = file;
    this.form.enabledSavebutton = true;
  }

  public async onChangeImage3(file: File) {
    this._image3File = file;
    this.form.enabledSavebutton = true;
  }

  public async handleSave() {
    if (this.form.enabledSavebutton) {
      this.form.enabledSavebutton = false;
      const updated = await this._shopSetting.uploadPicture(
        this._logoFile,
        this._image1File,
        this._image2File,
        this._image3File
      );
      if (updated) {
        await this.dismiss();
      } else {
        this.form.enabledSavebutton = true;
      }
    }
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  private async loadParam() {
    const config: ShopConfigurationType | undefined = await this._navParam.get('config');
    if (config !== undefined) {
      this.setting = config.setting;
      this.before = config.setting;
    } else {
      await this.dismiss();
    }
  }
}
