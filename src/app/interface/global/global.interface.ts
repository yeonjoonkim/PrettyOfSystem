import {
  AustraliaStateType,
  DateDayNightType,
  FormActionType,
  DayIndexType,
  DayType,
  PeriodType,
} from '../../constant/constant';

export interface ITimer {
  timerSettingMin: number;
  startDateTime: Date;
  currentDateTime: Date;
  endDateTime: Date;
  inProgress: boolean;
  end: boolean;
  duration: TimerDurationType;
  percent: TimerPercentType;
  label: string;
}

export type TimerPercentType = {
  remain: number;
  used: number;
};

export type TimerDurationType = {
  hour: number;
  min: number;
  sec: number;
};

export type PairKeyValueType = {
  key: string;
  value: string;
};

export type PairNameValueType = {
  name: string;
  value: string | number;
};

export type PairNameValueTypeFilterParamType = {
  name: string;
  translatedName: string;
  value: string | number;
};

export type PairValueIdType = {
  id: string;
  value: string | number;
};

export type ComponentActionType = {
  name: string;
  isEdit: boolean;
  isCancel: boolean;
  isSave: boolean;
};

export type AddressType = {
  street: string;
  suburb: string;
  state: string;
  postCode: string;
};

export type PostCodeItemType = {
  postCode: string;
  suburb: string;
};

export type PostCodeFilterOptionType = {
  postCodeList: PostCodeItemType[];
  stateList: AustraliaStateType[];
};

export type TimeItemType = {
  hr: number;
  min: number;
  dayNightType: DateDayNightType;
  strValue: string;
};

export type IDateIndexPairDay = {
  index: DayIndexType;
  day: DayType;
};

export type DatePeriodType = {
  name: string;
  type: PeriodType;
  week: number;
  day: number;
};

export type IFormHeaderModalProp = {
  readOnly: boolean;
  action: FormActionType;
  enabledSavebutton: boolean;
  headerTitle: string;
};
