import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { AddLanguageComponent } from '../add-language/add-language.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'language-management',
  templateUrl: './language-management.component.html',
  styleUrls: ['./language-management.component.scss'],
})

//TODO: Will implement the add language with products, services to the shops
export class LanguageManagementComponent implements OnInit {

  constructor(public language: LanguageService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  public async onClickAddLanguage(): Promise<void>{
    let addLanguage = await this.modalCtrl.create({
      component: AddLanguageComponent,
      cssClass: 'modal'
    });

    await addLanguage.present();
  }




  //TODO: ADD IT TO THE language management
  //public async test(values: ILanguageTransformKeyPairValue[]){
  //  //this.language.deleteKeyPairValue('test.test.name');
  //  //let values = await this.language.getDefaultLanguagePackageKeyPairValue();
  //  let newPackage: ITextTransformObject = {};
   // let max = values.length;
  //  let currentIndex = 0;
   // let loadingMsg = await this.language.transform('loading.name.translating');
   // await this.loading.show(loadingMsg);

   // let interval = setInterval(() => {
     // if(currentIndex + 1 === values.length){
     //   this.loading.dismiss();
    //    clearInterval(interval);
    //  }else{
    //    let percentage =  " (" +Math.round((currentIndex / max) * 100) + "%" + ")";
   //     this.loading.message = loadingMsg + percentage;
   //   }
   // }, 1500);
    //send api
   // values.forEach(async (value, index) => {
//      setTimeout(async () => {
//        currentIndex = index;
  //      value.value = await this.langugeTranslate.getTranslatedSelectedLanguage('Taiwanese', value.value);
  //      //newPackage = await this.language.setNewPackageTransformValue(newPackage, value);
  //    }, index * 2500);
  //  });
  //}

}
