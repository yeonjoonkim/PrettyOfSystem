import { TimeZone } from './timezone';

export const SystemSetting = {
  TimeZone: TimeZone.AustraliaBrisbane,
};

export const ShopSetting = {
  General: {
    TaxRate: 0.1,
  } as const,
  TimePicker: {
    IntervalMin: 15,
  } as const,
} as const;

export const Login = {
  Status: {
    Selection: 'Selection',
    PhoneVerification: 'PhoneVerification',
    OTPVerification: 'OTPVerification',
    EmailVerification: 'EmailVerification',
  } as const,
} as const;

export const Text = {
  Format: {
    Upper: 'upper',
    Lower: 'lower',
    Title: 'title',
    Description: 'description',
  } as const,
} as const;

export const Default = {
  Refresh: 'Refresh',
  Gender: {
    Male: 'Male',
    Female: 'Female',
    Other: 'Other',
    All: 'All',
  } as const,

  ComponentMode: {
    Filter: 'filter',
    Form: 'form',
  } as const,

  PhoneCode: {
    KR: '+82',
    CN: '+86',
    JP: '+81',
    AU: '+61',
  } as const,

  FormAction: {
    Create: 'create',
    Edit: 'edit',
    Read: 'read',
  } as const,

  FormStatus: {
    Editing: 'editing',
    Deleting: 'deleting',
    Creating: 'creating',
    Saving: 'saving',
    Reading: 'reading',
  } as const,

  CountryCodeType: {
    Korean: 'KR',
    China: 'CN',
    Japan: 'JP',
    Australia: 'AU',
  } as const,

  CurrencyType: {
    AUD: 'AUD',
    JPY: 'JPY',
    KRW: 'KRW',
    CNY: 'CNY',
  } as const,

  RoleDescriptionType: {
    SystemAdmin: 'System Admin',
    Admin: 'Admin',
    Manager: 'Manager',
    Reception: 'POS',
    Employee: 'Employee',
    None: '',
  } as const,

  RoleAccessRateType: {
    NoAccess: 0,
    Client: 1,
    Employee: 10,
    Reception: 100,
    Manager: 1000,
    Admin: 10000,
    SystemAdmin: 100000,
  } as const,
};

export const Setting = {
  ShopSetting: {} as const,
  PersonalSetting: {} as const,
};

export const State = {
  AustraliaType: {
    NT: 'NT',
    NSW: 'NSW',
    QLD: 'QLD',
    SA: 'SA',
    WA: 'WA',
    TAS: 'TAS',
    ACT: 'ACT',
  } as const,
};

export const Date = {
  DayNightType: {
    NIGHT: 'PM',
    DAY: 'AM',
  } as const,
  Format: {
    Korean: 'yyyy-MM-dd',
    Japan: 'yyyy-MM-dd',
    China: 'yyyy-MM-dd',
    Australia: 'dd-MMM-yyyy',
  } as const,
  TimeStatus: {
    Current: 'current',
    Start: 'start',
    End: 'end',
  } as const,
  DayIndex: {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  } as const,
  Day: {
    Sun: 'sun',
    Mon: 'mon',
    Tue: 'tue',
    Wed: 'wed',
    Thu: 'thu',
    Fri: 'fri',
    Sat: 'sat',
  } as const,
  Period: {
    Weekly: 'Weekly',
    Monthly: 'Monthly',
    Quarterly: 'Quarterly',
    HalfYear: 'HalfYear',
    Annually: 'Annually',
    Custom: 'Custom',
  } as const,
} as const;
