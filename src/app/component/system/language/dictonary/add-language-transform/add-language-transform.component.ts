import { Component, OnInit } from '@angular/core';
import {
  IAddLanguageTransformSaveCommand,
  ILanguageTranslateItem,
} from 'src/app/interface/system/language/language.interface';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { GlobalService } from 'src/app/service//global/global.service';
import { ActionSheetController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'add-language-transform',
  templateUrl: './add-language-transform.component.html',
  styleUrls: ['./add-language-transform.component.scss'],
})
export class AddLanguageTransformComponent implements OnInit {
  private isSaved: boolean = false;
  public languageTransform: IPairKeyValue = {
    key: '',
    value: '',
  };

  constructor(
    private global: GlobalService,
    private actionSheetCtrl: ActionSheetController,
    private popOverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  /** This will close the this component as a modal*/
  public async dismissAddLanguage(): Promise<void> {
    await this.popOverCtrl.dismiss({ key: this.languageTransform.key, isSaved: this.isSaved });
  }

  /**This will start, when user click save button */
  public async onClickSaveButton(): Promise<void> {
    let validated: IAddLanguageTransformSaveCommand =
      await this.global.language.validateNewKeyPairValue(this.languageTransform);

    if (validated.hasValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat) {
      let selectionFormat = await this.openFormatSelectionSheet();
      if (!selectionFormat?.data?.isCancel && selectionFormat?.data !== undefined) {
        let translateCriteria = await this.global.language.getAllLanguageTranslateCriteria();
        translateCriteria.isTitle = selectionFormat.data.isTitle;
        let result = await this.global.languageTranslate.getTranslatedLanguagePackage(
          this.languageTransform.value,
          translateCriteria
        );
        result.isEmpty;
        await this.updateLanguagePackage(result);
      }
    }
  }

  /**This will return format action */
  private async openFormatSelectionSheet() {
    let formatSelectionHeader = await this.global.language.transform(
      'transform.name.formatselectionheader'
    );
    let descriptionFormat = await this.global.language.transform(
      'transform.name.descriptionformat'
    );
    let titleFormat = await this.global.language.transform('transform.name.titleFormat');
    let cancel = await this.global.language.transform('button.name.cancel');
    let formatSelection = await this.actionSheetCtrl.create({
      header: formatSelectionHeader,
      buttons: [
        { text: descriptionFormat, data: { isTitle: false, isCancel: false } },
        { text: titleFormat, data: { isTitle: true, isCancel: false } },
        { text: cancel, data: { isTitle: false, isCancel: true } },
      ],
    });

    await formatSelection.present();
    let result = await formatSelection.onDidDismiss();
    return result;
  }

  /** This will update language package */
  private async updateLanguagePackage(result: ILanguageTranslateItem): Promise<void> {
    if (!result.isEmpty) {
      let sccuess = await this.global.language.transform('message.success.save');
      await this.global.language.editLanguagePackage(
        result,
        this.languageTransform.key.toLowerCase()
      );
      await this.global.toast.present(sccuess);
      this.isSaved = true;
      this.dismissAddLanguage();
    } else {
      let errorMsg = await this.global.language.transform('message.error.unsaved');
      await this.global.toast.presentError(errorMsg);
    }
  }
}
