import { Component, OnInit } from '@angular/core';
import {
  IAddLanguageTransformSaveCommand,
  ILanguageTranslateItem,
} from 'src/app/interface/system/language/language.interface';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { GlobalService } from 'src/app/service//global/global.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'add-language-transform',
  templateUrl: './add-language-transform.component.html',
  styleUrls: ['./add-language-transform.component.scss'],
})
export class AddLanguageTransformComponent implements OnInit {
  private isSaved: boolean = false;
  public componentSelection: IPairKeyValue[] = [
    { key: 'option.title.option', value: 'option.' },
    { key: 'option.title.label', value: 'label.' },
    { key: 'option.title.button', value: 'button.' },
    { key: 'option.title.confirmation', value: 'confirmation.' },
    { key: 'option.title.messagefail', value: 'messagefail.' },
    { key: 'option.title.messagesuccess', value: 'messagesuccess.' },
    { key: 'option.title.messageerror', value: 'messageerror.' },
    { key: 'option.title.date', value: 'date.' },
    { key: 'option.title.time', value: 'time.' },
    { key: 'option.title.placeholder', value: 'placeholder.' },
    { key: 'option.title.language', value: 'language.' },
  ];
  public formatSelection: IPairKeyValue[] = [
    { key: 'option.title.title', value: 'title.' },
    { key: 'option.title.description', value: 'description.' },
    { key: 'option.title.uppercase', value: 'upper.' },
    { key: 'option.title.lowercase', value: 'lowercase.' },
  ];
  public selectedComponent: IPairKeyValue = { key: 'option.title.label', value: 'label.' };
  public selectedFormat: IPairKeyValue = { key: 'option.title.title', value: 'title.' };
  public keyValue: string = '';
  public validator = {
    text: false,
  };
  public languageTransform: IPairKeyValue = {
    key: '',
    value: '',
  };

  constructor(private global: GlobalService, private popOverCtrl: PopoverController) {}

  ngOnInit() {}

  public onChangeComponentSelection() {
    this.languageTransform.key =
      this.selectedComponent.value + this.selectedFormat.value + this.keyValue;
  }

  public onChangeFormatSelection() {
    this.languageTransform.key =
      this.selectedComponent.value + this.selectedFormat.value + this.keyValue;
  }

  public onChangeKeyValue() {
    this.languageTransform.key =
      this.selectedComponent.value + this.selectedFormat.value + this.keyValue;
  }

  /** This will close the this component as a modal*/
  public async dismissAddLanguage(): Promise<void> {
    await this.popOverCtrl.dismiss({ key: this.languageTransform.key, isSaved: this.isSaved });
  }

  /**This will start, when user click save button */
  public async onClickSaveButton(): Promise<void> {
    let validated: IAddLanguageTransformSaveCommand =
      await this.global.language.validateNewKeyPairValue(this.languageTransform);

    if (validated.hasValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat) {
      let translateCriteria =
        await this.global.language.management.translateCriteria.allLanguageCriteria(
          this.languageTransform.key
        );
      let result = await this.global.languageTranslate.get(
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
      let sccuess = await this.global.language.transform('messagesuccess.title.save');
      await this.global.language.management.addPackage(
        result,
        this.languageTransform.key.toLowerCase()
      );
      await this.global.toast.present(sccuess);
      this.isSaved = true;
      this.dismissAddLanguage();
    } else {
      let errorMsg = await this.global.language.transform('messagefail.title.unsaved');
      await this.global.toast.presentError(errorMsg);
    }
  }
}
