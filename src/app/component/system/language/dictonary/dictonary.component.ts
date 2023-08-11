import { Component, OnInit } from '@angular/core';
import { ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';
import { AddLanguageTransformComponent } from './add-language-transform/add-language-transform.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'language-dictonary',
  templateUrl: './dictonary.component.html',
  styleUrls: ['./dictonary.component.scss'],
})
export class DictonaryComponent implements OnInit {
  public selectedLangValue: string = '';
  public selectedLang: ILanguageTransformKeyPairValue = {key: '', value: ''};
  public languageSelectionList: ILanguageTransformKeyPairValue[] = [];
  public selectedKeyPairValueList: ILanguageTransformKeyPairValue[] = [];
  public gridData: ILanguageTransformKeyPairValue[] = [];
  public query: string = "";

  constructor(public systemlanguage: SystemLanguageService, private popOverCtrl: PopoverController) {}

  async ngOnInit() {
    this.subscribeLanguageSelection();
  }

  public async onChangeLanguageSelection(){
    this.selectedLangValue = this.selectedLang.value;
    this.selectedKeyPairValueList = await this.systemlanguage.getSelectedLanguageKeyPairValueList(this.selectedLang.key);
    this.gridData = this.selectedKeyPairValueList;
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
    }
  }

  public onChangeQuery() {
    this.gridData = this.query.length === 0 ? this.selectedKeyPairValueList : this.selectedKeyPairValueList.filter(q => {
      return (typeof q.key === 'string' && q.key.includes(this.query)) || (typeof q.value === 'string' && q.value.includes(this.query));
    });
  }

  public async onChangeLanguage(event: ILanguageTransformKeyPairValue){
    this.selectedLang = event;
    await this.onChangeLanguageSelection();
  }

  private subscribeLanguageSelection(){
    this.systemlanguage.subscription().subscribe(async langSelection => {
      this.languageSelectionList = await this.systemlanguage.getLanguageSelectionKeyPairValueList(langSelection);
      this.selectedLang = this.selectedLang.key ? this.selectedLang : this.languageSelectionList[0];
      this.selectedLangValue = this.selectedLang.value;
      await this.onChangeLanguageSelection();
      this.onChangeQuery();
    });
  }
}
