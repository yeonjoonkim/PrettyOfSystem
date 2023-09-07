import { Injectable } from '@angular/core';
import { IPairKeyValue } from 'src/app/interface';
import {
  ITextTransformObject,
  TextTransformService,
} from 'src/app/service/global/text-transform/text-transform.service';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguagePackageService {
  private _textTransform: TextTransformService;
  constructor() {
    this._textTransform = new TextTransformService();
  }

  public update(pack: ITextTransformObject, pair: IPairKeyValue) {
    let isString: boolean = typeof pair.value === 'string';

    if (isString) {
      let path: string[] = this._textTransform.setLanguageTransformCodeList(pair.key);
      let hasFirstPath: boolean = this.firstPath(pack, path);
      let hasSecondPath: boolean = this.secondPath(pack, path);
      if (!hasFirstPath) {
        pack[path[0]] = {};
      }
      if (!hasSecondPath) {
        pack[path[0]][path[1]] = {};
      }

      if (pair.value) pack[path[0]][path[1]][path[2]] = pair.value;
    }

    return pack;
  }

  public delete(pack: ITextTransformObject, selectedKey: string): ITextTransformObject {
    const path: string[] = this._textTransform.setLanguageTransformCodeList(selectedKey);

    if (this.hasThirdPath(pack, path)) {
      delete pack[path[0]][path[1]][path[2]];
    }

    // Ensure path[0] and path[1] exist before checking keys
    if (
      pack[path[0]] &&
      pack[path[0]][path[1]] &&
      Object.keys(pack[path[0]][path[1]]).length === 0
    ) {
      delete pack[path[0]][path[1]];
    }

    // Ensure path[0] exists before checking keys
    if (pack[path[0]] && Object.keys(pack[path[0]]).length === 0) {
      delete pack[path[0]];
    }

    return pack;
  }

  public getKeyPairValueList(usedKeyList: string[], pack: ITextTransformObject): IPairKeyValue[] {
    let keyPairValueList: IPairKeyValue[] = usedKeyList.map(key => {
      let path = this._textTransform.setLanguageTransformCodeList(key);
      let value = this.getValue(path, pack);
      return { key: key, value: value };
    });

    return keyPairValueList;
  }

  //** Determine First Path is exist.*/
  private firstPath(pack: ITextTransformObject, path: string[]): boolean {
    if (pack && pack[path[0]]) {
      return true;
    }
    return false;
  }

  //** Determine Second Path is exist.*/
  private secondPath(pack: ITextTransformObject, path: string[]): boolean {
    if (pack && pack[path[0]] && pack[path[0]][path[1]]) {
      return true;
    }
    return false;
  }

  //** Determine if Third Path exists */
  private hasThirdPath(pack: ITextTransformObject, path: string[]): boolean {
    return (
      pack &&
      pack[path[0]] &&
      pack[path[0]][path[1]] &&
      typeof pack[path[0]][path[1]][path[2]] === 'string'
    );
  }

  //** Delete a property from the parent object if it's empty or doesn't exist */
  private deleteIfEmpty(parentObj: any, prop: string): void {
    if (
      parentObj &&
      (Object.keys(parentObj[prop] || {}).length === 0 || parentObj[prop] === undefined)
    ) {
      delete parentObj[prop];
    }
  }

  /** Find a Object Key Value from path */
  public getValue(path: string[], obj: ITextTransformObject) {
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
