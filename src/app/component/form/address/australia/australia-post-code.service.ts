import { Injectable } from '@angular/core';
import { NswService } from './state/nsw/nsw.service';
import { QldService } from './state/qld/qld.service';
import { WaService } from './state/wa/wa.service';
import { VicService } from './state/vic/vic.service';
import { TasService } from './state/tas/tas.service';
import { SaService } from './state/sa/sa.service';
import { NtService } from './state/nt/nt.service';
import * as Constant from 'src/app/constant/constant';
import {
  PostCodeFilterOptionType,
  PostCodeItemType,
} from 'src/app/interface/global/global.interface';
import { ActService } from './state/act/act.service';
@Injectable({
  providedIn: 'root',
})
export class AustraliaPostCodeService {
  constructor(
    public nsw: NswService,
    public qld: QldService,
    public wa: WaService,
    public vic: VicService,
    public tas: TasService,
    public sa: SaService,
    public nt: NtService,
    public act: ActService
  ) {}

  public getCombined() {
    return [
      ...this.act.data,
      ...this.nsw.data,
      ...this.qld.data,

      ...this.wa.data,
      ...this.vic.data,
      ...this.tas.data,
      ...this.sa.data,
      ...this.nt.data,
    ];
  }

  public getPostCodeFilterOption(state: Constant.AustraliaStateType): PostCodeFilterOptionType {
    return {
      postCodeList: this.getSelectedPostCodeList(state),
      stateList: this.getStateTypeList(),
    };
  }

  public convertStringToAustraliaStateType(str: string): Constant.AustraliaStateType {
    switch (str) {
      case 'NSW':
        return Constant.State.AustraliaType.NSW;
      case 'QLD':
        return Constant.State.AustraliaType.QLD;
      case 'SA':
        return Constant.State.AustraliaType.SA;
      case 'WA':
        return Constant.State.AustraliaType.WA;
      case 'TAS':
        return Constant.State.AustraliaType.TAS;
      case 'ACT':
        return Constant.State.AustraliaType.ACT;
      case 'NT':
        return Constant.State.AustraliaType.NT;
      default:
        return Constant.State.AustraliaType.QLD;
    }
  }

  public StateType(state: string) {
    return (
      state === Constant.State.AustraliaType.NSW ||
      state === Constant.State.AustraliaType.QLD ||
      state === Constant.State.AustraliaType.SA ||
      state === Constant.State.AustraliaType.WA ||
      state === Constant.State.AustraliaType.TAS ||
      state === Constant.State.AustraliaType.ACT ||
      state === Constant.State.AustraliaType.NT
    );
  }

  public getSelectedPostCodeList(state: Constant.AustraliaStateType): PostCodeItemType[] {
    return state === Constant.State.AustraliaType.NSW
      ? this.nsw.data
      : state === Constant.State.AustraliaType.QLD
      ? this.qld.data
      : state === Constant.State.AustraliaType.WA
      ? this.wa.data
      : state === Constant.State.AustraliaType.NT
      ? this.nt.data
      : state === Constant.State.AustraliaType.SA
      ? this.sa.data
      : state === Constant.State.AustraliaType.TAS
      ? this.tas.data
      : state === Constant.State.AustraliaType.ACT
      ? this.act.data
      : this.qld.data;
  }

  public getStateTypeList(): Constant.AustraliaStateType[] {
    let obj = Constant.State.AustraliaType;
    let objList: Constant.AustraliaStateType[] = [];
    for (let value of Object.values(obj)) {
      objList.push(value);
    }

    return objList.sort();
  }
}
