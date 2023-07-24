import {AustraliaStateType, DateDayNightType, FormActionType, DayIndexType, DayType, DatePeriodType} from './../../shared/services/global/global-constant';

export interface IComponentAction{
  name: string;
  isEdit: boolean;
  isCancel: boolean;
  isSave: boolean;
}

export interface IAddress{
  street: string;
  suburb: string;
  state: string;
  postCode: string;
}

export interface IPostCodeItem{
  postCode: string;
  suburb: string;
}

export interface IPostCodeFilterOption{
  postCodeList: IPostCodeItem[];
  stateList: AustraliaStateType[]
}

export interface ITimeItem{
  hr: number,
  min: number,
  sec: number,
  DayNightType: DateDayNightType
  strValue: string;
}

export interface IDateIndexPairDay{
  index: DayIndexType,
  day: DayType
}

export interface IDatePeriod{
  name: string;
  type: DatePeriodType;
  week: number;
  day: number;
}

export interface IFormHeaderModalProp{
  readOnly: boolean;
  action: FormActionType;
  enabledSavebutton: boolean;
  headerTitle: string;
}
