import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageSelectionType } from 'src/app/interface/system/language/language.interface';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'langauge-selection',
  templateUrl: './langauge-selection.component.html',
  styleUrls: ['./langauge-selection.component.scss'],
})
export class LangaugeSelectionComponent implements OnInit {
  @ViewChild('dropdownlist')
  public dropdownlist!: DropDownListComponent;
  public selectedLanguage: NameValuePairType = { name: '', value: '' };
  public languageSelection: NameValuePairType[] = [];

  constructor(public language: LanguageService) {}

  async ngOnInit() {
    await this.setDefault();
  }

  private async setDefault() {
    const currentLanguage = await this.language.management.storage.getCurrentLanguage();
    this.languageSelection = await this.setLanguageSelectionList();
    let currentValue = this.languageSelection.find(s => s.value === currentLanguage);
    this.selectedLanguage = currentValue !== undefined ? currentValue : { value: '', name: '' };
  }

  /** This function will set the global language by using language service. */
  public async onChangeLanguage() {
    this.language.currentLanguage = this.selectedLanguage.value.toString();
    await this.language.onLanguageChange();
  }

  private async setLanguageSelectionList() {
    let selections: LanguageSelectionType[] =
      await this.language.management.storage.getSelections();
    let promise = selections.map(async s => {
      return { name: s.description, value: s.code };
    });
    let result = await Promise.all(promise);
    return result;
  }
}
