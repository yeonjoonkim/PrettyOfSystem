import * as I from '../../../interface';

export const get = function (selection: I.LanguageSelectionType, key: string): string {
  const segments = getSegments(key);
  const packet = value(selection.package, segments);
  return !isObject(packet) && isString(packet) ? packet : '';
};

const value = function (obj: I.TextTransformObjectType, segments: string[]): string {
  let selectedValue: any;
  segments.forEach((segment, index) => {
    if (index === 0) {
      selectedValue = obj;
      for (let key in selectedValue) {
        if (key === segment) {
          selectedValue = selectedValue[key];
        }
      }
    } else if (index > 0) {
      for (let key in selectedValue) {
        if (key === segment) {
          selectedValue = selectedValue[key];
        }
      }
    }
  });
  return selectedValue;
};

const isObject = function (value: any): value is object {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

const isString = function (value: any): value is string {
  return typeof value === 'string';
};

const getSegments = function (key: string) {
  return key.toLowerCase().split('.');
};
