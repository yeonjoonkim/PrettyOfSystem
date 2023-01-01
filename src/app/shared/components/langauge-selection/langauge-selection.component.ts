import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';


@Component({
  selector: 'langauge-selection',
  templateUrl: './langauge-selection.component.html',
  styleUrls: ['./langauge-selection.component.scss'],
})
export class LangaugeSelectionComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {}

    /** This function will set the global language by using language service. */
    async onChangeLanguage(){
      this.language.languageChange();
    }

}
