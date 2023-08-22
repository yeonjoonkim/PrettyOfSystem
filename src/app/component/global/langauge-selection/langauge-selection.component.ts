import { Component, OnInit, ViewChild } from '@angular/core';
import { ILanguageSelection } from 'src/app/interface/system/language/language.interface';
import { LanguageService } from '../../../service/global/language/language.service';
import { IPairValueId } from 'src/app/interface/system/system.interface';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'langauge-selection',
  templateUrl: './langauge-selection.component.html',
  styleUrls: ['./langauge-selection.component.scss'],
})
export class LangaugeSelectionComponent implements OnInit {
  @ViewChild('dropdownlist')
  public dropdownlist!: DropDownListComponent;
  public selectedLanguage: IPairValueId = { id: '', value: '' };
  public languageSelection: IPairValueId[] = [];

  constructor(public language: LanguageService) {}

  async ngOnInit() {
    await this.setDefault();
  }

  public onClose(event: any) {
    event.preventDefault();
    setTimeout(() => {
      if (!this.dropdownlist.wrapper.nativeElement.contains(document.activeElement)) {
        this.dropdownlist.toggle(false);
      }
    });
  }

  private async setDefault() {
    this.languageSelection = await this.setLanguageSelectionList();
    let currentValue = this.languageSelection.find(s => s.id === this.language.currentLanguage);
    this.selectedLanguage = currentValue !== undefined ? currentValue : { id: '', value: '' };
  }

  /** This function will set the global language by using language service. */
  public async onChangeLanguage() {
    this.language.currentLanguage = this.selectedLanguage.id;
    this.language.onLanguageChange();
  }

  private async setLanguageSelectionList() {
    let selections: ILanguageSelection[] = await this.language.getLanguageSelection();

    let promises: Promise<IPairValueId>[] = selections.map(async s => {
      let name = await this.language.transform(s.description);
      return { id: s.code, value: name };
    });

    let keyPairList: IPairValueId[] = await Promise.all(promises);

    return keyPairList;
  }
}
