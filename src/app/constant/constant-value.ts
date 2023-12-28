import { TimeZone } from './timezone';

export const SystemSetting = {
  TimeZone: TimeZone.AustraliaBrisbane,
};

export const ShopCategoryTitle = {
  MobileShop: 'label.title.mobileshop',
  PersonalTraining: 'label.title.personaltraining',
  Hairsalon: 'label.title.hairsalon',
  SkinCare: 'label.title.skincare',
  NailArt: 'label.titile.nailart',
  MassageTheraphy: 'label.title.massagetheraphy',
} as const;

export const BookingSearchIconType = {
  NailArt: 'label.title.nailart',
  MassageTheraphy: 'label.title.massagetheraphy',
  SkinCare: 'label.title.skincare',
} as const;

export const PackageDiscountType = {
  Percent: 'Percent',
  Dollar: 'Dollar',
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
    None: '',
  } as const,
} as const;

export const ChangeNumberRequestStatus = {
  Create: 'Create',
  EmailSent: 'SentEmail',
  EmailFail: 'SendFail',
  Submit: 'Submit',
} as const;

export const Default = {
  Refresh: 'Refresh',
  Gender: {
    Male: 'Male',
    Female: 'Female',
    Other: 'Other',
    All: 'All',
  } as const,

  LanguageTransformType: {
    System: 'System',
    User: 'User',
    WaitingList: 'Waiting-List',
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

export const Massage = {
  Description: {
    DeepTissueMassage: 'Deep Tissue Massage',
    HotStoneMassage: 'Hot Stone Massage',
    SportsMassage: 'Sports Massage',
    CouplesMassage: 'Couples Massage',
    Acupuncture: 'Acupuncture',
    AromatherapyMassage: 'Aromatherapy Massage',
    ThaiMassage: 'Thai Massage',
    SwedishMassage: 'Swedish Massage',
    Shiatsu: 'Shiatsu',
    Reflexology: 'Reflexology',
    LymphaticMassage: 'Lymphatic Massage',
    TriggerPointTherapy: 'Trigger Point Therapy',
    Acupressure: 'Acupressure',
    CuppingTherapy: 'Cupping Therapy',
    HerbalCompressMassage: 'Herbal Compress Massage',
    ScalpMassage: 'Scalp Massage',
    BarefootBarTherapy: 'Barefoot Bar Therapy',
    NeuromuscularTherapy: 'Neuromuscular Therapy',
    RemedialMassage: 'Remedial Massage',
    FootMassage: 'Foot Massage',
    SpaMassage: 'Spa Massage',
  } as const,
  Body: {
    PreferenceType: {
      NoPreference: 'NoPreference',
      Avoid: 'Avoid',
      Focus: 'Focus',
    } as const,
    PreferenceName: {
      NoPreference: 'label.title.nopreference',
      Avoid: 'label.title.avoid',
      Focus: 'label.title.focus',
    } as const,
  } as const,
  PainScale: {
    Rating: {
      Zero: 0,
      One: 1,
      Two: 2,
      Three: 3,
      Four: 4,
      Five: 5,
      Six: 6,
      Seven: 7,
      Eight: 8,
      Nine: 9,
      Ten: 10,
    } as const,
    Description: {
      NoPain: 'label.title.nopain', //이상없음 0
      Mild: 'label.title.mild', //경증 1-4
      Moderate: 'label.title.moderate', // 5-6
      Severe: 'label.title.severe', //중증 7-10
    } as const,
  } as const,
  Pressure: {
    Raiting: {
      One: 1,
      Two: 2,
      Three: 3,
      Four: 4,
      Five: 5,
    } as const,
    Description: {
      ExtremeSoft: 'label.title.extremesoft',
      Soft: 'label.title.soft',
      Medium: 'label.title.medium',
      Strong: 'label.title.strong',
      ExtremeStrong: 'label.title.extremestrong',
    } as const,
  } as const,
  DifficultChangePosition: {
    Type: {
      NoProblem: 'NoProblem',
      FrontToBack: 'FrontToBack',
      BackToFront: 'BackToFront',
      Both: 'Both',
    } as const,
    Description: {
      NoProblem: 'label.title.noproblem',
      FrontToBack: 'label.title.fromfronttoback',
      BackToFront: 'label.title.frombacktofront',
      Both: 'label.title.both',
    } as const,
  } as const,
};

export const Medical = {
  Insurance: {
    Ahm: 'Ahm',
    AIA: 'AIA',
    Apia: 'Apia',
    AustralianUnity: 'Australian Unity',
    BUPA: 'BUPA',
    Frank: 'Frank',
    GMHBA: 'GMHBA',
    HBF: 'HBF',
    HCF: 'HCF',
    HealthInsuranceFundOfAustralia: 'Health Insurance Fund of Australia',
    HunterHealthInsurance: 'Hunter Health Insurance',
    LatrobeHealthServices: 'Latrobe Health Services',
    Medibank: 'Medibank',
    MilduraHealthFund: 'Mildura Health Fund',
    Nib: 'Nib',
    Onemedifund: 'Onemedifund',
    Peoplecare: 'Peoplecare',
    PhoenixHealthFund: 'Phoenix Health Fund',
    QantasHealthInsurance: 'Qantas Health Insurance',
    RTHealth: 'RT Health',
    WestFundHealthInsurance: 'Westfund Health Insurance',
  } as const,
  History: {
    Type: {
      Symptom: 'Symptom',
      Disease: 'Disease',
    } as const,
    SystemType: {
      Integumentary: 'Integumentary',
      Skeletal: 'Skeletal',
      Muscular: 'Muscular',
      Nervous: 'Nervous',
      Endocrine: 'Endocrine',
      Cardiovascular: 'Cardiovascular',
      Lymphatic: 'Lymphatic',
      Respiratory: 'Respiratory',
      Digestive: 'Digestive',
      Urinary: 'Urinary',
      Reproductive: 'Reproductive',
    } as const,
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

export const ShopSetting = {
  Financial: {
    TaxRate: 0.1,
    CardSurchargeRate: 0.018,
    CashDiscountRate: 0.03,
    OpeningBalance: 250,
    OpeningHour: 0,
    ClosingHour: 0,
  } as const,
  Calender: {
    IntervalMin: 15,
    NextAvailableBookingMin: 30,
    MaximumAvailableFutureBookingDays: 14,
  } as const,
  QRCode: {
    WaitingListSessionExiryMin: 15,
  } as const,
  Picture: {
    LogoUrl:
      'https://firebasestorage.googleapis.com/v0/b/prettyofsystem.appspot.com/o/prettyofsystem-logo-white.svg?alt=media&token=70eedb82-988d-47ca-9b79-e52aeeaee6b1&_gl=1*lrncmg*_ga*MTM4MDAzMTEzNC4xNjk4MjQ3NjY4*_ga_CW55HF8NVT*MTY5OTEwNzE4My4xNC4xLjE2OTkxMDczOTUuMTQuMC4w',
    Placeholder:
      'https://firebasestorage.googleapis.com/v0/b/prettyofsystem.appspot.com/o/place-holder-image.jpeg?alt=media&token=96954b11-d870-424f-bb15-0e8ab04607dc&_gl=1*pq6nct*_ga*MTM4MDAzMTEzNC4xNjk4MjQ3NjY4*_ga_CW55HF8NVT*MTY5OTEwNzE4My4xNC4xLjE2OTkxMDg4MjcuNDMuMC4w',
  },
  WaitingList: {
    intervalMin: 5,
  },
} as const;

export const CartItem = {
  Service: 'label.title.service',
  Coupon: 'label.title.coupon',
  Package: 'label.title.package',
  Extra: 'label.title.extra',
} as const;
