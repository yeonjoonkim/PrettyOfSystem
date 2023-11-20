import { setGlobalOptions } from 'firebase-functions/v2';
import * as admin from 'firebase-admin';
admin.initializeApp();

setGlobalOptions({ maxInstances: 10 });
export * from './api/index';
export * from './trigger/index';
export * from './scheduler/index';
