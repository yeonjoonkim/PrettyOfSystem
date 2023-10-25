import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {
  IFormHeaderModalProp,
  ILanguageTranslatedCriteria,
  NameValuePairType,
  ShopLanguagePackageModalProp,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';
import { LanguageTranslateService } from 'src/app/service/global/language-translate/language-translate.service';
import { ShopTranslatedRequestService } from 'src/app/service/shop/shop-translated-request/shop-translated-request.service';

@Component({
  selector: 'shop-language-package',
  templateUrl: './shop-language-package.component.html',
  styleUrls: ['./shop-language-package.component.scss'],
})
export class ShopLanguagePackageComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public current!: ShopLanguagePackageModalProp;
  private _before!: ShopLanguagePackageModalProp;
  public _validator!: boolean[];
  constructor(
    private _modalCtrl: ModalController,
    private _navParams: NavParams,
    private _global: GlobalService,
    private _languageTranslated: LanguageTranslateService,
    private _translated: ShopTranslatedRequestService
  ) {}

  async ngOnInit() {
    await this.loadingFormCtrl();
  }

  public onChangeProp(change: NameValuePairType) {
    const after: NameValuePairType | undefined = this.current.relatedKeys.find(
      s => s.name === change.name
    );
    const before: NameValuePairType | undefined = this._before.relatedKeys.find(
      s => s.name === change.name
    );
    const index = this._before.relatedKeys.findIndex(r => r.name === change.name);
    const afterIndex = this.current.relatedKeys.findIndex(r => r.name === change.name);

    if (before !== undefined && after !== undefined) {
      const isInLimited = after.value.length >= 1;
      this._validator[index] = isInLimited;
      const precleansed = this._global.textTransform.preCleansingTranslateProp(after.value);
      this.current.relatedKeys[afterIndex].value = this.current.isTitle
        ? this._global.textTransform.getTitleFormat(precleansed)
        : precleansed;
    }
    this.form.enabledSavebutton = !this._validator.includes(false);
  }

  public async refresh(key: NameValuePairType, lang: NameValuePairType) {
    const code = lang.value.split('.');
    const language = await this._global.language.management.getSelectedSelection(code[2]);
    const index = this.current.relatedKeys.findIndex(s => s.name == key.name);

    const criteria: ILanguageTranslatedCriteria = {
      name: [language.name],
      code: [code[2]],
      format: {
        isDescription: !this.current.isTitle,
        isTitle: this.current.isTitle,
        isLower: false,
        isUpper: false,
      },
    };

    const splitParts = key.name.split('.');
    splitParts[2] = 'en';
    const english = splitParts.join('.');

    const eng = this._before.relatedKeys.find(s => s.name === english);
    if (eng !== undefined) {
      const result = await this._languageTranslated.get(eng.value, criteria, true);
      if (!result.isEmpty) {
        const translatedResult = result.translated[code[2]];
        this.current.relatedKeys[index].value = translatedResult;
      } else {
        const msg = await this._global.language.transform(
          'messageerror.description.couldnottranslated'
        );
        await this._global.toast.presentError(msg);
      }
    }
  }

  public async handleSave() {
    this.form.enabledSavebutton = false;
    const update = await this._translated.updatePackage(this.current.relatedKeys);
    if (update) {
      await this.dismiss();
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  public async handleEdit() {
    this.form.readOnly = false;
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  private async loadingFormCtrl() {
    const formProp: IFormHeaderModalProp | undefined = this._navParams.get(
      Constant.Default.ComponentMode.Form
    );
    const prop: ShopLanguagePackageModalProp | undefined = this._navParams.get('prop');

    if (formProp !== undefined && prop !== undefined) {
      this._before = cloneDeep(prop);
      this.current = cloneDeep(prop);
      this.form = cloneDeep(formProp);
      this._validator = this.current.relatedKeys.map(() => true);
    } else {
      await this._modalCtrl.dismiss();
    }
  }
}
