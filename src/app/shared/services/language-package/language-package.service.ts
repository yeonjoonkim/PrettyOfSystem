import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { ILanguageTransformKeyPairValue } from 'src/app/interface/system/language/language.interface';
import { ITextTransformObject, TextTransformService } from '../text-transform/text-transform.service';

@Injectable({
  providedIn: 'root'
})
export class LanguagePackageService {

  constructor(private textTransform: TextTransformService) { }

  /** This will retreive list of key pair value.*/
  public getKeyPairValue(usedKeyList: string[], pack: any): ILanguageTransformKeyPairValue[]{
    let keyPairValueList: ILanguageTransformKeyPairValue[] = [];

    if(usedKeyList.length > 0){
      keyPairValueList =  usedKeyList.map(
        key => {
          let path = this.textTransform.setLanguageTransformCodeList(key);
          let value = this.getValue(path, pack);
          return {key: key, value: value};
        });
    }
    return keyPairValueList;
  }


  /** This will return edited key value in the package to update in db */
  public editKeyValuePackage(pack: ITextTransformObject, keyPairValue: ILanguageTransformKeyPairValue){
    let editedPackage = pack;
    let path: string[] = this.textTransform.setLanguageTransformCodeList(keyPairValue.key);
    let hasFirstPath: boolean = this.hasFirstPath(pack, path);
    let hasSecondPath: boolean = this.hasSecondPath(pack, path);
    let hasThirdPath: boolean = this.hasThirdPath(pack, path);

    if(!hasFirstPath){
      editedPackage[path[0]] = {};
    }
    if(!hasSecondPath){
      let firstPath: any = editedPackage[path[0]];
      firstPath[path[1]] = {};
      editedPackage[path[0]] = firstPath;
    }
    if(!hasThirdPath){
      let firstPath: any = editedPackage[path[0]];
      let secondPath: any = firstPath[path[1]];
      secondPath[path[2]] = keyPairValue.value;
      editedPackage[path[0]] = firstPath;
    }

    return editedPackage;
  }


  /** This will return removed key value in the package to update in db */
  public deleteKeyValuePackage(pack: ITextTransformObject, selectedKey: string){
    let editPackage = pack;
    let path: string[] = this.textTransform.setLanguageTransformCodeList(selectedKey);
    let firsthPathPackage = editPackage[path[0]];
    let secondPathPackage = firsthPathPackage[path[1]];
    let hasValue = firsthPathPackage !== undefined && secondPathPackage !== undefined;
    //Delete Key Pair Value

    if(hasValue){
        delete secondPathPackage[path[2]];

        let isSecondPathEmpty = Object.keys(secondPathPackage).length === 0;
        if(isSecondPathEmpty){
          delete firsthPathPackage[path[0]];
        }
        else{
          firsthPathPackage[path[1]] = secondPathPackage;
        }

        let isFistPathPathEmpty = Object.keys(firsthPathPackage).length === 0;
        if(isFistPathPathEmpty){
          delete editPackage[path[0]];
        }
        else{
          editPackage[path[0]] = firsthPathPackage;
        }
    }

    return editPackage;
  }


  //** Determine First Path is exist.*/
  private hasFirstPath(pack: any, path: string[]){
    return pack[path[0]] !== undefined;
  }

  //** Determine Second Path is exist.*/
  private hasSecondPath(pack: any, path: string[]){
    let object = pack[path[0]] !== undefined ? pack[path[0]] : {};
    let secondObject = object[path[1]];
    return secondObject !== undefined;
  }

  //** Determine Third Path is exist.*/
  private hasThirdPath(pack: any, path: string[]){
    let object = pack[path[0]] !== undefined ? pack[path[0]] : {};
    let secondObject = pack[path[1]] !== undefined ? object[path[1]] : {};
    let thirdObject = secondObject[path[2]];

    return thirdObject !== undefined;
  }


  /** Find a Object Key Value from path */
  public getValue(path: string[], obj: {}){
    let selectedValue: any;

    path.forEach((code, index) => {
      if (index === 0) {
        selectedValue = obj;
        for (let key in selectedValue) {
          if (key === code) {
            selectedValue = selectedValue[key];
          }
        }
      } else if (index > 0) {
        for (let key in selectedValue) {
          if (key === code) {
            selectedValue = selectedValue[key];
          }
        }
      }
    });

    return selectedValue;
  }
}
