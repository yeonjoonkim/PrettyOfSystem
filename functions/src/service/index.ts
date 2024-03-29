export * as Crypt from './crypt/service-crypt';
export * as Date from './date/service-date';
export * as Trigger from './trigger/service-trigger';
export * as TextTransform from './text/service-text';
export * as Translate from './translate/service-translate';
export * as Override from './override/index';
export * as User from './user/index';
export * as Scheduler from './scheduler/index';
export * as Email from './e-mail/e-mail';
export * as TypeChecker from './type-checker/type-checker';
export * as Transform from './transform/transform';

export const sleep = async (duration: number) => {
  return new Promise(resolve => setTimeout(resolve, duration));
};
