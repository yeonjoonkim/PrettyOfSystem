import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
import { ILanguagePackageDescription, ILanugagePackageKeyPairValue } from '../../../../../shared/services/language/interface/language.interface';

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

  /**Language Change segment event */
  onChangeLanguage(){
    this.transformDictionary = this.language.getLanguageTransformValue(this.currentLanguageCode);
  }

  /**Dismiss the Component Modal */
  dismiss(){
    this.modalCtrl.dismiss();
  }

}
