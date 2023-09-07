import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IFormHeaderModalProp } from 'src/app/interface/global/global.interface';
import * as Constant from 'src/app/constant/constant';
import { ModalController, NavParams } from '@ionic/angular';
import {
  ICreateNewPackageCommand,
  ILanguageSelection,
} from 'src/app/interface/system/language/language.interface';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit, AfterViewInit, OnDestroy {
  private saveCommandSubscription: Subscription | undefined;
  public createStatus!: ICreateNewPackageCommand;
  public isSaving: boolean = false;
  public form!: IFormHeaderModalProp;
  private selectedlanguage!: ILanguageSelection | undefined;
  public keyPairValueList: IPairKeyValue[] = [];

  public language: ILanguageSelection = {
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
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private systemLanguage: SystemLanguageService,
    private global: GlobalService
  ) {
    this.loadingFormCtrl();
  }

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.onChangeForm();
  }

  ngOnDestroy(): void {
    this.saveCommandSubscription?.unsubscribe();
  }

  private async onChangeForm(): Promise<void> {
    setTimeout(() => {
      this.form.enabledSavebutton = this.validateLanguage();
    });
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  public async handleEdit() {
    this.form.readOnly = false;
    this.form.enabledSavebutton = false;
  }

  public handleCreate() {
    this.global.language.management.add.receiveCreateNewPackageCommand(
      this.language.name,
      this.language.code,
      this.keyPairValueList
    );
    this.saveCommandSubscription = this.global.language.management.add.status.subscribe(command => {
      if (command !== undefined) {
        this.global.language.management.add.handleTranslateCommand(command);
        this.createStatus = command;
        this.keyPairValueList = command.defaultKeyPairList;
        this.form.enabledSavebutton = false;
        this.form.readOnly = true;

        if (command.endTransaction) {
          this.language.package = command.newPackage;
          this.global.language.management.add.save(this.language);
          this.global.language.management.storage.refresh();
          this.modalCtrl.dismiss({ role: 'Saved' });
        }
      }
    });
  }

  private async loadingFormCtrl() {
    let form: IFormHeaderModalProp = this.navParams.get(Constant.Default.ComponentMode.Form);
    this.selectedlanguage = this.navParams.get('language');
    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };
    this.language = this.selectedlanguage !== undefined ? this.selectedlanguage : this.language;
    this.keyPairValueList = await this.systemLanguage.getSelectedLanguageKeyPairValueList(
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
