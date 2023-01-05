import { ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { ModalController, PopoverController} from '@ionic/angular';
import { AddLanguageTransformComponent } from '../add-language-transform/add-language-transform.component';

@Component({
  selector: 'language-transform-dictionary',
  templateUrl: './language-transform-dictionary.component.html',
  styleUrls: ['./language-transform-dictionary.component.scss'],
})

export class LanguageTransformDictionaryComponent implements OnInit {
  public selectedKeyPairValue: string = '';
  public selectedLanguageCode: string = '';
  public keyPairValue: ILanguageTransformKeyPairValue[] = [];

  constructor(public language: LanguageService, private modalCtrl: ModalController, private popOverCtrl: PopoverController) {
  }


  async ngOnInit() {
    this.selectedLanguageCode = this.language.currentLanguage;
    this.subscribeLanguageKeyValue();
  }


  /** This will get the key pair value from selected language package to display in ui.*/
  public async onChangeLanguageSelection(){
    this.keyPairValue = await this.language.getSelectedLanguageKeyPairValueList(this.selectedLanguageCode);
  }


  /** This will open the add component */
  public async openAddLanguageTransform(){
    let addLanguageTransformModal = await this.modalCtrl.create(
      {component: AddLanguageTransformComponent,
      cssClass: 'modal' },
    );

    await addLanguageTransformModal.present();
    let result = await addLanguageTransformModal.onWillDismiss();
    if(result.data?.isSaved){
      this.selectedKeyPairValue = result.data.key;
    }
  }


  /** This will close this component (modal version)*/
  public dismissDictonary(){
    this.modalCtrl.dismiss();
  }


  /** This will subscribe language key list to receive any change of the database.*/
  private subscribeLanguageKeyValue(){
    this.language.languageSelectionKey.subscribe(
      async () => {
      this.keyPairValue = await this.language.getSelectedLanguageKeyPairValueList(this.selectedLanguageCode);
    });
  }

}
