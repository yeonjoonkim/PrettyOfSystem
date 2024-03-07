import * as I from '../../../../interface';
import * as Repository from '../../../../repository/index';

export const manageWorkStatusRequest = async function (config: I.ShopConfigurationType) {
  const workStatusChangeRequests = await Repository.Shop.Schedule.UpdateRequest.WorkingStatus.getAll(config.id);
  if (workStatusChangeRequests.length) {
    for (const request of workStatusChangeRequests) {
      await Repository.Shop.Schedule.UpdateRequest.WorkingStatus.deleteDocument(request.shopId, request.id);
    }
  }
};
