import { Component, OnDestroy, OnInit } from '@angular/core';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import { cloneDeep } from 'lodash-es';
import { Subscription } from 'rxjs';
import { ChatGptTranslateDocumentType } from 'src/app/interface';
import { LanguageSelectionType } from 'src/app/interface/system/language/language.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'language-management',
  templateUrl: './language-management.component.html',
  styleUrls: ['./language-management.component.scss'],
})
export class LanguageManagementComponent implements OnInit, OnDestroy {
  private _translateRequestSubscription!: Subscription;
  private _readOnly = true;
  private _isModalOpen: boolean = false;

  public languageSelection: LanguageSelectionType[] = [];
  public saved: boolean = false;
  public translateRequest!: ChatGptTranslateDocumentType[];

  constructor(private _systemLanguage: SystemLanguageService) {}

  async ngOnInit() {
    await this.setLanguageSelection();
    this.activateListener();
  }

  ngOnDestroy() {
    this._translateRequestSubscription?.unsubscribe();
  }

  private activateListener() {
    this._translateRequestSubscription = this._systemLanguage
      .translateRequestValueChangeListener()
      .subscribe(request => {
        this.translateRequest = request;
      });
  }

  private async setLanguageSelection() {
    this.languageSelection = await this._systemLanguage.get();
  }

  public async reSendRequest(request: ChatGptTranslateDocumentType) {
    const copied = cloneDeep(request);
    copied.attempt = 0;
    copied.error = [];
    copied.result = [];
    copied.status = Constant.API.TranslateStatus.Pending;
    await this._systemLanguage.updateTranslateDocument(copied);
  }

  public async onClickLanguage(selected: CellClickEvent) {
    let selectedLanguageSelection: LanguageSelectionType = selected.dataItem;
    let modal = this._readOnly
      ? await this._systemLanguage.modal.read(selectedLanguageSelection)
      : await this._systemLanguage.modal.edit(selectedLanguageSelection);
    this._isModalOpen = true;
    await modal.present();
    await modal.onDidDismiss();
    this._isModalOpen = false;
  }

  public async onClickCreate() {
    let modal = await this._systemLanguage.modal.create();
    await modal.present();
    this._isModalOpen = true;
    let result = await modal.onDidDismiss();
    if (result?.role === 'Saved') {
      this._isModalOpen = false;
      this.saved = true;
    }
  }
}
