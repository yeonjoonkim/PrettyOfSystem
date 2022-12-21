import { StorageService } from '../../services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { IonicUiService } from 'src/app/shared/services/ui-ionic/service/ui-ionic.service';
import { LanguageService } from '../../services/language/service/language.service';

@Component({
  selector: 'ui-language-setting',
  templateUrl: './ui-language.component.html',
  styleUrls: ['./ui-language.component.scss'],
})


export class UiLanguageComponent implements OnInit {
  public selectedLangauge: string = '';

  constructor(public language: LanguageService, private storage: StorageService, public ionic: IonicUiService) {
  }

  ngOnInit() {
    this.storage.getCurrentLanguage().then(langCode => {
      this.selectedLangauge = langCode;
    });
  }

  onChangeLanguage(){
    this.language.languageChange(this.selectedLangauge);
  }

}
