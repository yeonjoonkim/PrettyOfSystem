import * as I from '../../../interface';

export const override = function (s: I.UserSettingType) {
  s.preferLanguage = preferLanguage(s?.preferLanguage);
  s.privateInsurance = prviateInsurance(s?.privateInsurance);
  s.massage = massage(s?.massage);
  return s;
};

const preferLanguage = function (lang: string | undefined) {
  return lang !== undefined ? lang : 'en';
};

const prviateInsurance = function (insurance: I.UserSettingPrivateInsuranceType | undefined | null) {
  return insurance !== undefined && insurance !== null ? insurance : null;
};

const massage = function (massage: I.UserSettingMassageType | undefined) {
  return massage !== undefined
    ? massage
    : {
        currentMedicalTreatment: null,
        otherCondition: null,
        symptomsAndDiseases: [],
        pressureLevel: 0,
        focusAreas: [],
        avoidAreas: [],
      };
};
