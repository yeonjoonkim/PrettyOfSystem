import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as Db from '../../db';
import * as I from '../../interface';
import * as Servcie from '../../service/index';

export const OnConsultCreate = onDocumentCreated(Db.Context.Shop.Consult + '/{consultId}', async event => {
  const consultSnapShot = event.data;
  const consultData = !consultSnapShot ? null : consultSnapShot.data();
  let consult = consultData !== null ? (consultData as I.ConsultDocumentType) : null;
  if (consult !== null) {
    await Servcie.Trigger.Consult.OnCreate.Start(consult);
  }
});
