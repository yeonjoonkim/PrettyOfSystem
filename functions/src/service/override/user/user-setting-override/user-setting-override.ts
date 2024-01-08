import * as I from '../../../../interface';
import * as Constant from '../../../../constant';

export const override = function (s: I.UserSettingType) {
  s.pregnancyDueDate = pregnancyDueDate(s?.pregnancyDueDate);
  s.preferLanguage = preferLanguage(s?.preferLanguage);
  s.privateInsurance = prviateInsurance(s?.privateInsurance);
  s.massage = massage(s?.massage);
  s.medical = medical(s?.medical);
  s.emergencyContact = emergencyContact(s?.emergencyContact);
  return s;
};

const pregnancyDueDate = function (pregnancyDueDate: string | undefined | null) {
  return pregnancyDueDate !== null && pregnancyDueDate !== undefined ? pregnancyDueDate : null;
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
    difficultChangePosition: difficultChangePosition(massage?.difficultChangePosition),
  };
  return result;
};

const difficultChangePosition = function (positionType: I.MassageDifficultChangePosition | undefined | null) {
  return positionType !== undefined && positionType !== null
    ? positionType
    : {
        type: Constant.Massage.DifficultChangePosition.Type.NoProblem,
        description: Constant.Massage.DifficultChangePosition.Description.NoProblem,
      };
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

//EmergencyContact
const emergencyContact = function (emergencyContact: I.UserSettingEmergencyContactType | undefined | null) {
  return emergencyContact !== null && emergencyContact !== undefined ? emergencyContact : null;
};
