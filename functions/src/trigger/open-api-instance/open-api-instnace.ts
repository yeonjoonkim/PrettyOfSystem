import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as Repository from '../../repository/index';
import * as Db from '../../db';
import * as Constant from '../../constant';
import * as Service from '../../service/index';
import * as I from '../../interface';
import { logger } from 'firebase-functions/v2';

export const onOpenAPIInstanceUpdate = onDocumentUpdated(
  Db.Context.OpenApiInstance + '/{instanceId}',
  async event => {
    const instanceSnapshot = event.data;
    const beforeInstanceData = !instanceSnapshot?.before ? null : instanceSnapshot.before.data();
    const afterInstanceData = !instanceSnapshot?.after ? null : instanceSnapshot.after.data();

    const before =
      beforeInstanceData !== null ? (beforeInstanceData as I.OpenApiInstanceType) : null;
    let after = afterInstanceData !== null ? (afterInstanceData as I.OpenApiInstanceType) : null;

    if (before !== null && after !== null) {
      if (after.inUse) {
        logger.info(
          after.shopId +
            ' is in Used For Service Id: ' +
            after.serviceId +
            ' Format: ' +
            after.format
        );
        await handleExpiredDateChecker(after);
      } else {
        await pingPendingRequest(after);
      }
    }
  }
);

const pingPendingRequest = async function (vm: I.OpenApiInstanceType) {
  const pendings = await Repository.TranslateRequest.getPendings();

  if (pendings.length > 0) {
    const s = pendings[0];
    s.attempt = 0;
    s.error = [];
    s.result = [];
    s.status = Constant.API.TranslateStatus.InProgress;

    await Repository.OpenApiInstance.updateInUseInstance(vm, s.format, s.serviceId, s.shopId);
    await Repository.TranslateRequest.updateDocument(s);
  }
};

async function checkInstanceExpiry(instance: I.OpenApiInstanceType): Promise<void> {
  const currentInstance = await Repository.OpenApiInstance.getSelectedInstance(
    instance.shopId,
    instance.serviceId,
    instance.format
  );

  if (!currentInstance) return;

  const request = await Repository.TranslateRequest.getDocument(
    instance.serviceId,
    instance.shopId,
    instance.format
  );

  if (request) {
    request.status = Constant.API.TranslateStatus.Failed;
    await Repository.TranslateRequest.updateDocument(request);
  }

  await Repository.OpenApiInstance.updateNotInUseInstance(instance);
}

const handleExpiredDateChecker = async function (after: I.OpenApiInstanceType) {
  const now = new Date();
  const expired = Service.Date.toDate(after.expiredDate);
  const diff = expired.getTime() - now.getTime();

  if (diff <= 0) {
    await checkInstanceExpiry(after);
    return;
  }

  setTimeout(async () => {
    await checkInstanceExpiry(after);
  }, diff);
};
