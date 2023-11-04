import { Injectable } from '@angular/core';
import { LanguageSelectionType, NameValuePairType } from 'src/app/interface';
import { SystemLanguagePackageService } from 'src/app/service/global/language/system-language-management/system-language-package/system-language-package.service';
import { StorageService } from 'src/app/service/global/storage/storage.service';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { ToastService } from 'src/app/service/global/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseToasterService {
  private readonly _success: string = 'messagesuccess.title.';
  private readonly _fail: string = 'messagefail.title.';
  private readonly _msg = {
    success: {
      update: this._success + 'update',
      delete: this._success + 'delete',
      save: this._success + 'save',
      edit: this._success + 'edit',
      add: this._success + 'add',
      request: this._success + 'request',
      upload: this._success + 'upload',
    },
    fail: {
      update: this._fail + 'update',
      delete: this._fail + 'delete',
      save: this._fail + 'save',
      edit: this._fail + 'edit',
      add: this._fail + 'add',
      request: this._fail + 'request',
      upload: this._fail + 'upload',
    },
  };
  private readonly _errorCodes: NameValuePairType[] = [
    { name: 'permission-denied', value: 'messageerror.title.permissiondenied' },
  ];
  constructor(
    private _toaster: ToastService,
    private _storage: StorageService,
    private _textTransform: TextTransformService,
    private _systemLanguagePackage: SystemLanguagePackageService
  ) {}

  //Success
  public async updateSuccess() {
    const msg = await this.transform(this._msg.success.update);
    await this.presentSuccess(msg);
  }

  public async deleteSuccess() {
    const msg = await this.transform(this._msg.success.delete);
    await this.presentSuccess(msg);
  }

  public async saveSuccess() {
    const msg = await this.transform(this._msg.success.save);
    await this.presentSuccess(msg);
  }

  public async editSuccess() {
    const msg = await this.transform(this._msg.success.edit);
    await this.presentSuccess(msg);
  }

  public async addSuccess() {
    const msg = await this.transform(this._msg.success.add);
    await this.presentSuccess(msg);
  }

  public async requestSuccess() {
    const msg = await this.transform(this._msg.success.request);
    await this.presentSuccess(msg);
  }

  public async uploadSuccess() {
    const msg = await this.transform(this._msg.success.upload);
    await this.presentSuccess(msg);
  }

  // Fail
  public async updateFail(error: any) {
    const msg = await this.transform(this._msg.fail.update);
    await this.presentError(msg, error);
  }

  public async deleteFail(error: any) {
    const msg = await this.transform(this._msg.fail.delete);
    await this.presentError(msg, error);
  }

  public async saveFail(error: any) {
    const msg = await this.transform(this._msg.fail.save);
    await this.presentError(msg, error);
  }

  public async editFail(error: any) {
    const msg = await this.transform(this._msg.fail.edit);
    await this.presentError(msg, error);
  }

  public async addFail(error: any) {
    const msg = await this.transform(this._msg.fail.add);
    await this.presentError(msg, error);
  }

  public async requestFail(error: any) {
    const msg = await this.transform(this._msg.fail.request);
    await this.presentError(msg, error);
  }

  public async uploadFail(error: any) {
    const msg = await this.transform(this._msg.fail.upload);
    await this.presentError(msg, error);
  }

  //Toast Setting
  private async presentSuccess(msg: string) {
    await this._toaster.present(msg);
  }

  private async presentError(msg: string, err: any) {
    const errorCode: string = typeof err?.code === 'string' ? err.code : '';
    const error = this._errorCodes.find(err => err.name === errorCode);
    const errorDescription: string = error !== undefined ? error.value : errorCode;
    const errorMsg = msg + ' (' + (await this.transform(errorDescription)) + ')';
    await this._toaster.presentError(errorMsg);
  }

  private async transform(key: string) {
    let currentSelection = await this.getCurrentSelection();
    let path = this._textTransform.setLanguageTransformCodeList(key);
    let result = this._systemLanguagePackage.getValue(path, currentSelection?.package);

    return !this.isObject(result) && this.isString(result) ? result : key;
  }

  private async getCurrentSelection() {
    let currentLanguage: string = await this._storage.getLanguage();
    let selections = await this.getSelections();
    let selection = selections.filter(s => s.code === currentLanguage);

    return selection[0];
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
