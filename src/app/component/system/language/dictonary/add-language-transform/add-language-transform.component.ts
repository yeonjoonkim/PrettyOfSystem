import { Component, OnInit } from '@angular/core';
import {
  IAddLanguageTransformSaveCommand,
  ILanguageTranslateItem,
} from 'src/app/interface/system/language/language.interface';
import { PairKeyValueType, NameValuePairType } from 'src/app/interface/global/global.interface';
import { GlobalService } from 'src/app/service//global/global.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'add-language-transform',
  templateUrl: './add-language-transform.component.html',
  styleUrls: ['./add-language-transform.component.scss'],
})
export class AddLanguageTransformComponent implements OnInit {
  private _isSaved: boolean = false;
  public componentSelection: NameValuePairType[] = [
    { name: 'option.title.option', value: 'option.' },
    { name: 'option.title.label', value: 'label.' },
    { name: 'option.title.button', value: 'button.' },
    { name: 'option.title.confirmation', value: 'confirmation.' },
    { name: 'option.title.messagefail', value: 'messagefail.' },
    { name: 'option.title.messagesuccess', value: 'messagesuccess.' },
    { name: 'option.title.messageerror', value: 'messageerror.' },
    { name: 'option.title.date', value: 'date.' },
    { name: 'option.title.time', value: 'time.' },
    { name: 'option.title.placeholder', value: 'placeholder.' },
    { name: 'option.title.language', value: 'language.' },
    { name: 'option.title.role', value: 'role.' },
  ];
  public formatSelection: NameValuePairType[] = [
    { name: 'option.title.title', value: 'title.' },
    { name: 'option.title.description', value: 'description.' },
    { name: 'option.title.uppercase', value: 'upper.' },
    { name: 'option.title.lowercase', value: 'lowercase.' },
  ];
  public selectedComponent: NameValuePairType = { name: 'option.title.label', value: 'label.' };
  public selectedFormat: NameValuePairType = { name: 'option.title.title', value: 'title.' };
  public keyValue: string = '';
  public validator = {
    name: false,
  };
  public languageTransform: PairKeyValueType = {
    key: '',
    value: '',
  };

  constructor(private _global: GlobalService, private _popOverCtrl: PopoverController) {}

  ngOnInit() {}

  public onChangeComponentSelection() {
    this.keyValue = this.keyValue.toLowerCase().replace(' ', '');
    this.setTransformKey();
  }

  public onChangeFormatSelection() {
    this.keyValue = this.keyValue.toLowerCase().replace(' ', '');
    this.setTransformKey();
  }

  public onChangeKeyValue() {
    this.keyValue = this.keyValue.toLowerCase().replace(' ', '');
    this.setTransformKey();
  }

  private setTransformKey() {
    const selectedComponent: string =
      this.selectedComponent?.value !== undefined ? this.selectedComponent?.value : '';
    const selectedFormat: string =
      this.selectedFormat?.value !== undefined ? this.selectedFormat?.value : '';
    this.languageTransform.key = selectedComponent + selectedFormat + this.keyValue.toLowerCase();
    this.validator.name =
      this.languageTransform.key.split('.').length > 2 &&
      this.languageTransform.key.split('.').every(t => t.length > 0);
  }

  /** This will close the this component as a modal*/
  public async dismissAddLanguage(): Promise<void> {
    await this._popOverCtrl.dismiss({ key: this.languageTransform.key, isSaved: this._isSaved });
  }

  /**This will start, when user click save button */
  public async onClickSaveButton(): Promise<void> {
    let validated: IAddLanguageTransformSaveCommand =
      await this._global.language.validateNewKeyPairValue(this.languageTransform);

    if (validated.hasValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat) {
      let translateCriteria =
        await this._global.language.management.translateCriteria.allLanguageCriteria(
          this.languageTransform.key
        );
      let result = await this._global.languageTranslate.get(
        this.languageTransform.value,
        translateCriteria,
        true
      );
      await this.updateLanguagePackage(result);
    }
  }

  /** This will update language package */
  private async updateLanguagePackage(result: ILanguageTranslateItem): Promise<void> {
    if (!result.isEmpty) {
      this._isSaved = await this._global.language.management.addPackage(
        result,
        this.languageTransform.key.toLowerCase()
      );
      await this.dismissAddLanguage();
    }
  }
}
