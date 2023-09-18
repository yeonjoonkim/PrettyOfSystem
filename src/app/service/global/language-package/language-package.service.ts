import { Injectable } from '@angular/core';
import { PairKeyValueType } from 'src/app/interface/global/global.interface';
import {
  TextTransformObjectType,
  TextTransformService,
} from '../text-transform/text-transform.service';

@Injectable({
  providedIn: 'root',
})
export class LanguagePackageService {
  constructor(private _textTransform: TextTransformService) {}

  /** This will retreive list of key pair value.*/
  public getKeyPairValue(usedKeyList: string[], pack: any): PairKeyValueType[] {
    let keyPairValueList: PairKeyValueType[] = [];

    if (usedKeyList.length > 0) {
      keyPairValueList = usedKeyList.map(key => {
        let path = this._textTransform.setLanguageTransformCodeList(key);
        let value = this.getValue(path, pack);
        return { key: key, value: value };
      });
    }
    return keyPairValueList;
  }

  /** This will return edited key value in the package to update in db */
  public updateKeyValuePackage(pack: TextTransformObjectType, keyPairValue: PairKeyValueType) {
    let path: string[] = this._textTransform.setLanguageTransformCodeList(keyPairValue.key);
    let hasFirstPath: boolean = this.hasFirstPath(pack, path);
    let hasSecondPath: boolean = this.hasSecondPath(pack, path);

    if (!hasFirstPath) {
      pack[path[0]] = {};
    }
    if (!hasSecondPath) {
      pack[path[0]][path[1]] = {};
    }

    pack[path[0]][path[1]][path[2]] = keyPairValue.value;

    return pack;
  }

  /** This will return removed key value in the package to update in db */
  public deleteKeyValuePackage(pack: TextTransformObjectType, selectedKey: string) {
    let path: string[] = this._textTransform.setLanguageTransformCodeList(selectedKey);
    let hasThirdPath: boolean = this.hasThirdPath(pack, path);

    if (hasThirdPath) {
      delete pack[path[0]][path[1]][path[2]];
    }
    if (Object.keys(pack[path[0]][path[1]]).length === 0) {
      delete pack[path[0]][path[1]];
    }
    if (Object.keys(pack[path[0]]).length === 0) {
      delete pack[path[0]];
    }

    return pack;
  }

  //** Determine First Path is exist.*/
  private hasFirstPath(pack: any, path: string[]) {
    if (pack && pack[path[0]]) {
      return true;
    }
    return false;
  }

  //** Determine Second Path is exist.*/
  private hasSecondPath(pack: any, path: string[]) {
    if (pack && pack[path[0]] && pack[path[0]][path[1]]) {
      return true;
    }
    return false;
  }

  //** Determine Third Path is exist.*/
  private hasThirdPath(pack: any, path: string[]) {
    if (
      pack &&
      pack[path[0]] &&
      pack[path[0]][path[1]] &&
      typeof pack[path[0]][path[1]][path[2]] === 'string'
    ) {
      return true;
    }
    return false;
  }

  /** Find a Object Key Value from path */
  public getValue(path: string[], obj: {}) {
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
