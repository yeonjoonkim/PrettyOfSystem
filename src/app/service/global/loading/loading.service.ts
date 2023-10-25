import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../storage/storage.service';
import { TextTransformService } from '../text-transform/text-transform.service';
import { SystemLanguagePackageService } from '../language/system-language-management/system-language-package/system-language-package.service';
import { LanguageSelectionType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public message: string = '';

  constructor(
    private _loadingCtrl: LoadingController,
    private _storage: StorageService,
    private _textTransform: TextTransformService,
    private _systemLanguagePackage: SystemLanguagePackageService
  ) {}

  async show() {
    const loadingMsg = await this.transform('label.title.loading');
    let loading = await this._loadingCtrl.create({
      spinner: 'dots',
      message: loadingMsg,
      cssClass: 'logo-loading',
      translucent: false,
    });
    loading.present();
  }

  async init() {
    await this.show();
    setTimeout(() => {
      this.dismiss();
    }, 1000);
  }

  async dismiss() {
    const loading = await this._loadingCtrl.getTop();
    if (loading !== undefined) {
      await this._loadingCtrl.dismiss();
    }
  }

  private async transform(key: string) {
    let currentSelection = await this.getCurrentSelection();
    let path = this._textTransform.setLanguageTransformCodeList(key);
    if (currentSelection !== null) {
      let result = this._systemLanguagePackage.getValue(path, currentSelection?.package);
      return !this.isObject(result) && this.isString(result) ? result : key;
    } else {
      return '';
    }
  }

  private async getCurrentSelection() {
    let currentLanguage: string = await this._storage.getLanguage();
    let selections = await this.getSelections();
    let selection =
      selections !== null ? selections?.filter(s => s.code === currentLanguage) : null;

    return selection !== null ? selection[0] : null;
  }

  private async getSelections(): Promise<LanguageSelectionType[]> {
    let result: LanguageSelectionType[] = await this._storage.getLanguageSelection();
    return result;
  }

  private isObject(value: any): value is object {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  private isString(value: any): value is string {
    return typeof value === 'string';
  }
}
