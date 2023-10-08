import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import * as Constant from 'src/app/constant/constant';
import { ModalController, NavParams } from '@ionic/angular';
import {
  CreateNewPackageCommandType,
  LanguageSelectionType,
} from 'src/app/interface/system/language/language.interface';
import { PairKeyValueType } from 'src/app/interface/global/global.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit, AfterViewInit, OnDestroy {
  private _selectedlanguage!: LanguageSelectionType | undefined;
  private _saveCommandSubscription: Subscription | undefined;

  public createStatus!: CreateNewPackageCommandType;
  public isSaving: boolean = false;
  public form!: IFormHeaderModalProp;
  public keyPairValueList: PairKeyValueType[] = [];
  public language: LanguageSelectionType = {
    id: '',
    code: '',
    name: '',
    description: 'language.title.',
    package: {},
    isDefault: false,
  };
  public validator = {
    code: false,
    name: false,
    description: false,
  };

  constructor(
    private _navParams: NavParams,
    private _modalCtrl: ModalController,
    private _systemLanguage: SystemLanguageService,
    private _global: GlobalService
  ) {
    this.loadingFormCtrl();
  }

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.onChangeForm();
  }

  ngOnDestroy(): void {
    this._saveCommandSubscription?.unsubscribe();
  }

  private async onChangeForm(): Promise<void> {
    setTimeout(() => {
      this.form.enabledSavebutton = this.validateLanguage();
    });
  }

  public dismiss() {
    this._modalCtrl.dismiss();
  }

  public async handleEdit() {
    this.form.readOnly = false;
    this.form.enabledSavebutton = false;
  }

  public async handleCreate() {
    let defaultKeyPairList = await this._global.language.management.getDefaultKeyPairValueList();
    this._global.language.management.add.receiveCreateNewPackageCommand(
      this.language.name,
      this.language.code,
      defaultKeyPairList
    );
    this._saveCommandSubscription = this._global.language.management.add.status.subscribe(
      async command => {
        if (command !== undefined) {
          this._global.language.management.add.handleTranslateCommand(command);
          this.createStatus = command;
          this.keyPairValueList = command.defaultKeyPairList;
          this.form.enabledSavebutton = false;
          this.form.readOnly = true;

          if (command.endTransaction) {
            this.language.package = command.newPackage;
            this._global.language.management.add.save(this.language);
            this._global.language.management.storage.refresh();
            await this._systemLanguage.sendRequest({
              name: this.language.name,
              value: this.language.code,
            });
            this._modalCtrl.dismiss({ role: 'Saved' });
          }
        }
      }
    );
  }

  private async loadingFormCtrl() {
    let form: IFormHeaderModalProp = this._navParams.get(Constant.Default.ComponentMode.Form);
    this._selectedlanguage = this._navParams.get('language');
    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };
    this.language = this._selectedlanguage !== undefined ? this._selectedlanguage : this.language;
    this.keyPairValueList = await this._systemLanguage.getSelectedLanguageKeyPairValueList(
      this.language.code
    );
    this.keyPairValueList = this.keyPairValueList.map(kv => {
      kv.value = kv.value === undefined ? '' : kv.value;
      return kv;
    });
    this.form.enabledSavebutton = this.validateInput();
  }

  private validateInput() {
    return (
      this.language.code.length > 0 &&
      this.language.description.length > 0 &&
      this.language.name.length > 0
    );
  }

  private validateLanguage() {
    return this.validator.code && this.validator.name && this.validator.description;
  }
}
