import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'language-management',
  templateUrl: './language-management.component.html',
  styleUrls: ['./language-management.component.scss'],
})
export class LanguageManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {}




  //TODO: ADD IT TO THE language management
  //public async test(values: ILanguageTransformKeyPairValue[]){
  //  //this.language.deleteKeyPairValue('test.test.name');
  //  //let values = await this.language.getDefaultLanguagePackageKeyPairValue();
  //  let newPackage: ITextTransformObject = {};
   // let max = values.length;
  //  let currentIndex = 0;
   // let loadingMsg = await this.language.getLanguageTransformValue('loading.name.translating');
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
