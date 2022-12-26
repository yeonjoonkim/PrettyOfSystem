import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { ILanguagePackageDescription, ILanugagePackageKeyPairValue } from './../../../../shared/services/language/interface/language.interface';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'system-key-pair-value-dictionary',
  templateUrl: './key-pair-value-dictionary.component.html',
  styleUrls: ['./key-pair-value-dictionary.component.scss'],
})

export class KeyPairValueDictionaryComponent implements OnInit {
  public transformDictionary: Array<ILanugagePackageKeyPairValue> | undefined;
  public transformDictionarySearchQuery: string = '';
  public languageSelection: Array<ILanguagePackageDescription> | undefined;
  public currentLanguageCode: string = '';

  constructor(public language: LanguageService, private modalCtrl: ModalController) {
    this.currentLanguageCode = this.language.currentLanguage;
    this.languageSelection = this.language.getLanguageSelection();
    this.onChangeLanguage();
  }

  ngOnInit() {}

  onChangeLanguage(){
    this.transformDictionary = this.language.getLanguageTransformValue(this.currentLanguageCode);
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
