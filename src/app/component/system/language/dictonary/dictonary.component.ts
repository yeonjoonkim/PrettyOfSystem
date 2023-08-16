import { Component, OnInit } from '@angular/core';
import { ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';
import { AddLanguageTransformComponent } from './add-language-transform/add-language-transform.component';
import { PopoverController } from '@ionic/angular';
import { GlobalService } from 'src/app/shared/services/global/global.service';

@Component({
  selector: 'language-dictonary',
  templateUrl: './dictonary.component.html',
  styleUrls: ['./dictonary.component.scss'],
})
export class DictonaryComponent implements OnInit {
  public selectedLang: ILanguageTransformKeyPairValue = {key: '', value: ''};
  public languageSelectionList: ILanguageTransformKeyPairValue[] = [];
  public selectedKeyPairValueList: ILanguageTransformKeyPairValue[] = [];
  public gridData: ILanguageTransformKeyPairValue[] = [];
  public query: string = "";

  constructor(public systemLanguage: SystemLanguageService, private popOverCtrl: PopoverController, private global: GlobalService) {}

  async ngOnInit() {
    await this.setLanguageSelection();
  }

  public async onChangeLanguageSelection(){
    this.selectedKeyPairValueList = await this.systemLanguage.getSelectedLanguageKeyPairValueList(this.selectedLang.key);
    this.onChangeQuery();
  }

  public async openAddLanguageTransform(event: any): Promise<void>{
    let addLanguageTransformPopOver = await this.popOverCtrl.create(
      {component: AddLanguageTransformComponent,
       event: event,
      translucent: true},
    );

    await addLanguageTransformPopOver.present();
    let result = await addLanguageTransformPopOver.onWillDismiss();
    if(result.data?.isSaved){
      this.query = result.data.key;
      await this.setLanguageSelection();
    }
  }

  public onChangeQuery() {
    this.gridData = this.query.length === 0 ? this.selectedKeyPairValueList : this.selectedKeyPairValueList.filter(q => {
      return (typeof q.key === 'string' && q.key.toLowerCase().includes(this.query.toLowerCase())) || (typeof q.value === 'string' && q.value.toLowerCase().includes(this.query.toLowerCase()));
    });
  }

  public async setLanguageSelection(){
    this.global.loading.show('Refreshing');
    let languageSelection = await this.systemLanguage.get();
    await this.systemLanguage.refreshLocalStorage();
    this.languageSelectionList = await this.systemLanguage.getLanguageSelectionKeyPairValueList(languageSelection);
    this.selectedLang = this.selectedLang.key ? this.selectedLang : this.languageSelectionList[0];
    await this.onChangeLanguageSelection();
    this.onChangeQuery();
    this.global.loading.dismiss();
  }
}
