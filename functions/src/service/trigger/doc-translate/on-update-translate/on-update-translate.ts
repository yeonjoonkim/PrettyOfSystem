import * as I from '../../../../interface';

export const getLifeCycle = function (b: I.APITranslationStatus, a: I.APITranslationStatus) {
  const before = statusDetector(b);
  const after = statusDetector(a);
  const lifeCycle: I.ChatGptTranslateDocumentLifeCycleType = {
    createToPending: before.isCreate && after.isPending,
    createToInProgress: before.isCreate && after.isInProgrss,
    pendingToInProgress: before.isPending && after.isInProgrss,
    inProgressToPending: before.isInProgrss && after.isPending,
    inProgressToSuccess: before.isInProgrss && after.isSuccess,
    successToFail: before.isSuccess && after.isFailed,
    inProgressToFail: before.isInProgrss && after.isFailed,
    FailToPending: before.isFailed && after.isPending,
    SuccessToCompleted: before.isSuccess && after.isCompleted,
  };

  return lifeCycle;
};

export const getActionByLifeCycle = function (lc: I.ChatGptTranslateDocumentLifeCycleType) {
  const tryReconnect = lc.createToPending || lc.FailToPending || lc.inProgressToPending;
  const startTranslate = lc.createToInProgress || lc.pendingToInProgress;
  const updateShopLanguagePackage = lc.inProgressToSuccess;
  const failAlert = lc.inProgressToFail || lc.successToFail;
  const findPending = lc.SuccessToCompleted;
  const action: I.ChatGptTranslateDocumentChangeActionType = {
    tryReconnectOpenAPI: tryReconnect,
    startTranslate: startTranslate,
    updateShopLanguagePackage: updateShopLanguagePackage,
    failAlert: failAlert,
    findPendingToInProgress: findPending,
  };
  return action;
};

const statusDetector = function (status: I.APITranslationStatus) {
  const detector: I.ChatGptTranslateDocumentChangeType = {
    isCreate: isCreate(status),
    isPending: isPending(status),
    isInProgrss: isInProgress(status),
    isSuccess: isSuccess(status),
    isFailed: isFailed(status),
    isCompleted: isCompleted(status),
  };
  return detector;
};
const isCreate = function (status: I.APITranslationStatus) {
  return status === I.API.TranslateStatus.Create;
};
const isPending = function (status: I.APITranslationStatus) {
  return status === I.API.TranslateStatus.Pending;
};
const isInProgress = function (status: I.APITranslationStatus) {
  return status === I.API.TranslateStatus.InProgress;
};
const isSuccess = function (status: I.APITranslationStatus) {
  return status === I.API.TranslateStatus.Success;
};
const isFailed = function (status: I.APITranslationStatus) {
  return status === I.API.TranslateStatus.Failed;
};
const isCompleted = function (status: I.APITranslationStatus) {
  return status === I.API.TranslateStatus.Completed;
};
