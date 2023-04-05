import { Component, OnInit } from '@angular/core';
import { ILanguageSelection } from 'src/app/interface/system/language/language.interface';
import { LanguageService } from '../../services/language/language.service';


@Component({
  selector: 'langauge-selection',
  templateUrl: './langauge-selection.component.html',
  styleUrls: ['./langauge-selection.component.scss'],
})
export class LangaugeSelectionComponent implements OnInit {
  public selectedLanguage!:  ILanguageSelection;
  public languageSelection: ILanguageSelection[] = [];

  constructor(public language: LanguageService) {
    this.subscribeLanguageSelection();
  }

  ngOnInit() {}

  /** This function will set the global language by using language service. */
  public async onChangeLanguage(){
    this.language.currentLanguage = this.selectedLanguage.code;
    this.language.onLanguageChange();
  }

  private subscribeLanguageSelection(){
    this.language.languageSelection.subscribe(languageList => {
      if(languageList){
        this.setLanguageSelectionList(languageList);
      }
    });
  }

  private setLanguageSelectionList(languageList: ILanguageSelection[]){
    languageList.forEach(async lang => {
      let isExisted = this.languageSelection.filter(selection => selection.code === lang.code).length > 0;
      let isSelectedLanguage = this.language.currentLanguage === lang.code;
      lang.description = await this.language.transform(lang.description);
      if(isSelectedLanguage){
        this.selectedLanguage = lang;
      }

      if(!isExisted && !isSelectedLanguage){
        this.languageSelection.push(lang);
      }
    });
  }

}
