import { logger } from 'firebase-functions/v2';
import * as Repository from '../../repository/index';
import * as nodeEmailer from 'nodemailer';
import * as Constant from '../../constant';
import { google } from 'googleapis';

const transporter = async function () {
  const token = await getAccessToken();
  if (typeof token === 'string') {
    const transport = nodeEmailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: Constant.Email.Address,
        clientId: Constant.Email.Client_ID,
        clientSecret: Constant.Email.Client_Secret,
        refreshToken: Constant.Email.Refresh_Token,
        accessToken: token,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    return transport;
  } else {
    return null;
  }
};

const getAccessToken = async function () {
  const oAuthClient = new google.auth.OAuth2(
    Constant.Email.Client_ID,
    Constant.Email.Client_Secret,
    Constant.Email.Redirect_Url
  );
  oAuthClient.setCredentials({ refresh_token: Constant.Email.Refresh_Token });
  const response = await oAuthClient.getAccessToken();
  if (response && response.res) {
    switch (response.res.statusText) {
      case 'OK':
        return typeof response.token === 'string' ? response.token : null;
      default:
        return null;
    }
  } else {
    return null;
  }
};

const criteria = function (to: string, subject: string, text: string, html: string | null) {
  return html === null
    ? {
        from: Constant.Email.Address,
        to: to,
        subject: subject,
        text: text,
      }
    : {
        from: Constant.Email.Address,
        to: to,
        subject: subject,
        text: text,
        html: html,
      };
};

export const send = async function (to: string, subject: string, text: string, html: string | null) {
  const transport = await transporter();
  // logger.info(transport);
  const option = criteria(to, subject, text, html);
  try {
    if (transport !== null) {
      await transport.verify();
      const email = await transport.sendMail(option);
      logger.info(`MessageId: ${email.messageId}`);
    } else {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
    await Repository.Error.createErrorReport(error, 'Could not run', 'create', 'Send Email');
    return false;
  }
};
