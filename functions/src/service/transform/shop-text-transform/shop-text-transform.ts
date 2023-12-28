import * as I from '../../../interface';

export const get = function (
  pack: I.ShopConfigurationLanguagePackageType,
  packet: string,
  languageCode: string
): string {
  const key = `${packet}.${languageCode}`;
  const result = pack[key];
  return result !== undefined && result !== null ? result : '';
};
