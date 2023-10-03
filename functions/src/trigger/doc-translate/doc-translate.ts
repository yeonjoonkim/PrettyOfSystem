import { onDocumentCreated, onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as Constant from '../../constant';
import * as Service from '../../service/index';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';
//import * as admin from 'firebase-admin';

export const onCreateChatGptTranslateRequest = onDocumentCreated(
  Db.Context.ChatGptTranslateRequest + '/{requestId}',
  async event => {
    let requestData = event.data?.data() as I.ChatGptTranslateDocumentType | null;
    if (requestData) {
      const connection = await tryConnectTheOpenAPIInstance(requestData);

      if (connection) {
        requestData.status = Constant.API.TranslateStatus.InProgress;
        requestData.prop = Service.TextTransform.preCleansingTranslateProp(requestData.prop);
        await Repository.TranslateRequest.updateDocument(requestData);
        logger.info('1. Status - InProgress', requestData);
      } else {
        requestData.status = Constant.API.TranslateStatus.Pending;
        requestData.prop = Service.TextTransform.preCleansingTranslateProp(requestData.prop);
        logger.info('1. Status - Pending', requestData);
        await Repository.TranslateRequest.updateDocument(requestData);
      }
    }
  }
);

export const onUpdateChatGptTranslateRequest = onDocumentUpdated(
  Db.Context.ChatGptTranslateRequest + '/{requestId}',
  async event => {
    const updateSnapshot = event.data;
    const beforeSnapshotData = !updateSnapshot?.before ? null : updateSnapshot.before.data();
    const afterSnapshotData = !updateSnapshot?.after ? null : updateSnapshot.after.data();

    let before =
      beforeSnapshotData !== null ? (beforeSnapshotData as I.ChatGptTranslateDocumentType) : null;
    let after =
      afterSnapshotData !== null ? (afterSnapshotData as I.ChatGptTranslateDocumentType) : null;

    if (before !== null && after !== null) {
      const lifeCycle = Service.Trigger.Translate.OnChange.getLifeCycle(
        before.status,
        after.status
      );
      const action = Service.Trigger.Translate.OnChange.getActionByLifeCycle(lifeCycle);
      const vm = await Repository.OpenApiInstance.getSelectedInstance(
        after.shopId,
        after.serviceId,
        after.format
      );

      if (lifeCycle.FailToPending) {
        after.error = [];
        after.attempt = 0;
        after.result = [];
      }

      logger.info(after.id + ' triggered. Before: ' + before.status + '| After: ' + after.status);

      if (action.tryReconnectOpenAPI) {
        logger.info(after.id + ' Attempt to reconnect to open api instance.');
        const connection = await tryConnectTheOpenAPIInstance(after);
        if (connection) {
          after.status = Constant.API.TranslateStatus.InProgress;
          after.prop = Service.TextTransform.preCleansingTranslateProp(after.prop);
          await Repository.TranslateRequest.updateDocument(after);
          logger.info(after.id + 'connected ');
        } else {
          logger.info(after.id + ' cannot find any available instance. will try again.');
        }
      }

      if (action.startTranslate && vm !== undefined) {
        logger.info(after.id + ' Start Translate');
        let translated = await Service.Translate.process(vm, after);
        logger.info(after.id + ' End Translate');
        if (translated.error.length > 0) {
          logger.info(after.id + ' Error In Translate - Move to Fail');
          translated.status = Constant.API.TranslateStatus.Failed;
          await Repository.TranslateRequest.updateDocument(translated);
        } else {
          logger.info(after.id + ' Completed In Translate - Move to Success');
          translated.status = Constant.API.TranslateStatus.Success;
          await Repository.TranslateRequest.updateDocument(translated);
        }
      } else if (action.startTranslate && vm === undefined) {
        after.status = Constant.API.TranslateStatus.Pending;
        await Repository.TranslateRequest.updateDocument(after);
        logger.info(after.id + ' Fail Translate - will revert back to Pending');
      }

      if (action.updateShopLanguagePackage && vm !== undefined) {
        logger.info(after.id + ' Start Update Shop LanguagePackage');
        const update = await handleUpdateShopLanguagePackage(after);
        if (update) {
          logger.info(after.id + ' Update Shop LanguagePackage Completed');
          after.status = Constant.API.TranslateStatus.Completed;
          await Repository.TranslateRequest.updateDocument(after);
        } else {
          logger.info(after.id + ' Update Shop LanguagePackage Failed - Success To Failed');
          after.status = Constant.API.TranslateStatus.Failed;
          await Repository.TranslateRequest.updateDocument(after);
        }
      } else if (action.updateShopLanguagePackage && vm === undefined) {
        logger.info(after.id + ' Update Shop LanguagePackage Lost Connection');
        after.status = Constant.API.TranslateStatus.Failed;
        await Repository.TranslateRequest.updateDocument(after);
      }

      if (action.findPendingToInProgress) {
        await switchPendingRequestToInProgress(after);
      }
      if (action.failAlert && vm !== undefined) {
        //Alert to System Admin
        await switchPendingRequestToInProgress(after);
      }
    }
  }
);

const tryConnectTheOpenAPIInstance = async function (request: I.ChatGptTranslateDocumentType) {
  const vms = await Repository.OpenApiInstance.getUsefulInstances();

  let success = false;
  for (let index = 0; index < vms.length && !success; index++) {
    success = await Repository.OpenApiInstance.updateInUseInstance(
      vms[index],
      request.format,
      request.serviceId,
      request.shopId
    );
  }
  return success;
};

const switchPendingRequestToInProgress = async function (c: I.ChatGptTranslateDocumentType) {
  logger.info('switchPendingRequestToInProgress - Looking for pendings');
  let vm = await Repository.OpenApiInstance.getSelectedInstance(c.shopId, c.serviceId, c.format);
  const pendingRequests = await Repository.TranslateRequest.getPendings();
  if (vm !== undefined && pendingRequests.length > 0) {
    //Transform to In Progress
    let topOne = pendingRequests[0];
    topOne.prop = Service.TextTransform.preCleansingTranslateProp(topOne.prop);
    topOne.status = Constant.API.TranslateStatus.InProgress;

    await Repository.OpenApiInstance.updateInUseInstance(
      vm,
      topOne.format,
      topOne.serviceId,
      topOne.shopId
    );
    await Repository.TranslateRequest.updateDocument(topOne);
    logger.info('switchPendingRequestToInProgress Success');
    return true;
  } else if (vm !== undefined && pendingRequests.length === 0) {
    await Repository.OpenApiInstance.updateNotInUseInstance(vm);
    logger.info('switchPendingRequestToInProgress - Instance to be not in use - No Pendings');
    return false;
  } else {
    logger.error('switchPendingRequestToInProgress Failed - No Pendings or Instance');
    return false;
  }
};

const handleUpdateShopLanguagePackage = async function (doc: I.ChatGptTranslateDocumentType) {
  let shopConfig = await Repository.Shop.Configuration.getSelectedConfig(doc.shopId);
  if (shopConfig !== null) {
    for (let translated of doc.result) {
      const key = doc.packageKey + '.' + doc.format + '.' + translated.name;
      const value = translated.value;
      shopConfig.package[key] = value;
    }
    const update = await Repository.Shop.Configuration.updateConfig(shopConfig);
    return update;
  } else {
    return false;
  }
};
