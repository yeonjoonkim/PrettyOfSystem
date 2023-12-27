import * as I from '../../../../interface';
import * as Constant from '../../../../constant';
export const override = function (s: I.UserSettingType) {
  s.pregrencyDueDate = pregrencyDueDate(s?.pregrencyDueDate);
  s.preferLanguage = preferLanguage(s?.preferLanguage);
  s.privateInsurance = prviateInsurance(s?.privateInsurance);
  s.massage = massage(s?.massage);
  s.medical = medical(s?.medical);
  return s;
};

const pregrencyDueDate = function (pregrencyDueDate: string | undefined | null) {
  return typeof pregrencyDueDate === 'string' ? pregrencyDueDate : null;
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
    pressure: massagePressure(massage?.pressure),
    areas: areas(massage?.areas),
  };
  return result;
};

const massagePressure = function (pressureType: I.MassagePressureType | undefined | null) {
  return pressureType !== undefined && pressureType !== null
    ? pressureType
    : {
        rating: Constant.Massage.Pressure.Raiting.One,
        description: Constant.Massage.Pressure.Description.ExtremeSoft,
      };
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
