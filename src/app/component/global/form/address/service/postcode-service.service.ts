import { Injectable } from '@angular/core';
import * as Constant from '../../../../../service/global/global-constant';
import { AustraliaPostCodeService } from '../australia/australia-post-code.service';
import { IPostCodeFilterOption } from 'src/app/interface/global/global.interface';

export interface IStateTypeDeclaration{
  isAustralia: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class PostcodeService {

  constructor(private australia: AustraliaPostCodeService) {}

  public setPostCodeFilterOption(state: string): IPostCodeFilterOption{
    let result: IPostCodeFilterOption = {postCodeList: [], stateList: []};
    let stateType: IStateTypeDeclaration = this.findStateType(state);
    let australiaState: Constant.AustraliaStateType| undefined = stateType.isAustralia ? this.australia.convertStringToAustraliaStateType(state) : undefined;
  
    if(australiaState != undefined){
      result = this.australia.getPostCodeFilterOption(australiaState);
    }
    return result;
  }

  public findStateType(state: string): IStateTypeDeclaration {
    return {
      isAustralia: this.australia.StateType(state)
    };
  }
}