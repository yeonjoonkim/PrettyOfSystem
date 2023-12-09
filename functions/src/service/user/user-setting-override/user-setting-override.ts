import * as I from '../../../interface';

export const override = function (s: I.UserSettingType) {
  s.preferLanguage = preferLanguage(s?.preferLanguage);
  s.privateInsurance = prviateInsurance(s?.privateInsurance);
  s.massage = massage(s?.massage);
  s.medical = medical(s?.medical);
  return s;
};

//Prefer Language
const preferLanguage = function (lang: string | undefined) {
  return lang !== undefined ? lang : 'en';
};

//Private Insurance
const prviateInsurance = function (insurance: I.UserSettingPrivateInsuranceType | undefined | null) {
  return insurance !== undefined && insurance !== null ? insurance : null;
};

//Massage
const massage = function (massage: I.UserSettingMassageType | undefined) {
  const result = {
    pressureLevel: pressureLevel(massage?.pressureLevel),
    areas: areas(massage?.areas),
  };
  return result;
};

const pressureLevel = function (level: number | null | undefined) {
  return typeof level === 'number' ? level : 0;
};

const areas = function (areas: I.MassageBodySelectorAreaType[] | null | undefined) {
  return areas !== undefined && areas !== null ? areas : [];
};

// Medical

const medical = function (medical: I.UserSettingMedicalHistroyType | undefined | null) {
  const result = {
    symptomsAndDiseases: symptomsAndDiseases(medical?.symptomsAndDiseases),
    otherStatus: otherStatus(medical?.otherStatus),
  };
  return result;
};

const symptomsAndDiseases = function (symptomsAndDiseases: I.UserMedicalHistoryType[] | undefined | null) {
  return symptomsAndDiseases !== undefined && symptomsAndDiseases !== null ? symptomsAndDiseases : [];
};

const otherStatus = function (condition: I.ShopConfigurationLanguagePackageType | null | undefined) {
  return condition && condition !== null ? condition : null;
};
