import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'langauge-selection',
  templateUrl: './langauge-selection.component.html',
  styleUrls: ['./langauge-selection.component.scss'],
})
export class LangaugeSelectionComponent implements OnInit {
  @Input() isLabelRequired: boolean = true;
  @ViewChild('dropdownlist')
  public dropdownlist!: DropDownListComponent;
  public selected: NameValuePairType = { name: '', value: '' };
  public languages: NameValuePairType[] = [
    { name: 'हिन्दी', value: 'hi_in' }, // Hindi
    { name: '한국어', value: 'ko' }, // Korean
    { name: 'Italiano', value: 'it' }, // Italian
    { name: '日本語', value: 'ja' }, // Japanese
    { name: '简体中文', value: 'zh-hans' }, // Simplified Chinese
    { name: '繁體中文', value: 'zh-hant' }, // Traditional Chinese
    { name: 'Filipino', value: 'tl-ph' }, // Filipino
    { name: 'Español', value: 'es' }, // Spanish
    { name: 'Tiếng Việt', value: 'vi-vn' }, // Vietnamese
    { name: 'English', value: 'en' }, // English
    { name: 'Indonesia', value: 'id_id' }, // Indonesian
    { name: 'Français', value: 'fr' }, // French
  ];

  constructor(private _language: LanguageService) {}

  async ngOnInit() {
    await this.setDefault();
  }

  private async setDefault() {
    const current = await this._language.management.storage.getCurrentLanguage();
    const currentSelected = this.languages.find(l => l.value === current);
    if (currentSelected !== undefined) {
      this.selected = currentSelected;
    } else {
      this.selected = { name: 'English', value: 'en' };
      this.onChangeLanguage();
    }
  }

  /** This function will set the global language by using language service. */
  public async onChangeLanguage() {
    this._language.currentLanguage = this.selected.value;
    await this._language.onLanguageChange();
  }
}
