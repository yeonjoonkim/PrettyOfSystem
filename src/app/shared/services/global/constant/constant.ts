import { TimeZone } from "./timezone";

export const Default = {
   ComponentMode: {
    Filter: 'filter',
    Form: 'form',
  } as const,
  TimeZone: TimeZone.AustraliaBrisbane,

  PhoneCode: {
    KR: "+82",
    CN: "+86",
    JP: "+81",
    AU: "+61"
  } as const,

  FormAction: {
    Create: "create",
    Edit: "edit",
    Read: "read"
  } as const,

  FormStatus: {
    Editing: "editing",
    Deleting: "deleting",
    Creating: "creating",
    Saving: "saving",
    Reading: "reading"
  } as const,

  CountryCodeType:{
    Korean: 'KR',
    China: 'CN',
    Japan: 'JP',
    Australia: 'AU'
  } as const,

  CurrencyType: {
    AUD: "AUD",
    JPY: "JPY",
    KRW: "KRW",
    CNY: "CNY"
  } as const,

  RoleAccessType: {
    SystemAdmin: "systemAdmin",
    Admin: "admin",
    Manager: "manager",
    Reception: "reception",
    Employee: "employee"
  } as const,

  RoleAccessRateType: {
    Employee: 10,
    Reception: 100,
    Manager: 1000,
    Admin: 10000,
    SystemAdmin: 100000,
  } as const
};

export const Setting = {
  ShopSetting: {
    General: {
      TaxRate: 0.1
    } as const,
    ReservationScheduler: {
      IsEnabled: true,
      intervalMin: 0
    } as const
  } as const,
  PersonalSetting: {} as const,
};


export const State  = {
  AustraliaType: {
    NT: "NT" ,
    NSW: "NSW",
    QLD: "QLD",
    SA: "SA",
    WA: "WA",
    TAS: "TAS",
    ACT: "ACT"
  } as const
};

export const Date = {
  DayNightType: {
    NIGHT: 'PM',
    DAY: 'AM'
  } as const,
  Format:{
    Korean: 'yyyy-MM-dd',
    Japan: 'yyyy-MM-dd',
    China: 'yyyy-MM-dd',
    Australia: "dd-MMM-yyyy"
  } as const,
  TimeStatus: {
    Current: 'current',
    Start: 'start',
    End: 'end'
  } as const,
  DayIndex: {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
  } as const,
  Day:{
    Sun: "sun",
    Mon: "mon",
    Tue: "tue",
    Wed: "wed",
    Thu: "thu",
    Fri: "fri",
    Sat: "sat"
  } as const,
  Period:{
    Weekly: "Weekly",
    Monthly: "Monthly",
    Quarterly: "Quarterly",
    HalfYear: "HalfYear",
    Annually: "Annually",
    Custom: "Custom"
  } as const
} as const;
