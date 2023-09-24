import { Injectable } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { AustraliaPostCodeService } from '../australia/australia-post-code.service';
import { PostCodeFilterOptionType } from 'src/app/interface/global/global.interface';

export interface IStateTypeDeclaration {
  isAustralia: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class PostcodeService {
  constructor(private _australia: AustraliaPostCodeService) {}

  public getAustralia() {
    return this._australia.getCombined();
  }

  public setPostCodeFilterOption(state: string): PostCodeFilterOptionType {
    let result: PostCodeFilterOptionType = { postCodeList: [], stateList: [] };
    let stateType: IStateTypeDeclaration = this.findStateType(state);
    let australiaState: Constant.AustraliaStateType | undefined = stateType.isAustralia
      ? this._australia.convertStringToAustraliaStateType(state)
      : undefined;

    if (australiaState != undefined) {
      result = this._australia.getPostCodeFilterOption(australiaState);
    }
    return result;
  }

  public findStateType(state: string): IStateTypeDeclaration {
    return {
      isAustralia: this._australia.StateType(state),
    };
  }
}
