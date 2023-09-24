import { onRequest } from 'firebase-functions/v2/https';

export const testingconnection = onRequest(async (request, response) => {
  response.send('connect');
});
