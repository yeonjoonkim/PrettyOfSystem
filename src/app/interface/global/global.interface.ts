import {
  AustraliaStateType,
  DateDayNightType,
  FormActionType,
  DayIndexType,
  DayType,
  DatePeriodType,
} from 'src/app/service/global/global-constant';

export interface IPairKeyValue {
  key: string;
  value: string;
}

export interface IComponentAction {
  name: string;
  isEdit: boolean;
  isCancel: boolean;
  isSave: boolean;
}

export interface IAddress {
  street: string;
  suburb: string;
  state: string;
  postCode: string;
}

export interface IPostCodeItem {
  postCode: string;
  suburb: string;
}

export interface IPostCodeFilterOption {
  postCodeList: IPostCodeItem[];
  stateList: AustraliaStateType[];
}

export interface ITimeItem {
  hr: number;
  min: number;
  dayNightType: DateDayNightType;
  strValue: string;
}

export interface IDateIndexPairDay {
  index: DayIndexType;
  day: DayType;
}

export interface IDatePeriod {
  name: string;
  type: DatePeriodType;
  week: number;
  day: number;
}

export interface IFormHeaderModalProp {
  readOnly: boolean;
  action: FormActionType;
  enabledSavebutton: boolean;
  headerTitle: string;
}
