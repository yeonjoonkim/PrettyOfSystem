import axios, { AxiosResponse } from 'axios';
import * as I from '../../interface';

const url = 'https://api.openai.com/v1/chat/completions';

const headers = function (apiKey: string) {
  return {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + apiKey,
  };
};

const requestOption = function (
  h: I.OpenApiHeaderType,
  param: I.OpenApiParameterType,
  cmd: string
) {
  const p = { ...param, ...{ messages: [{ role: 'system', content: cmd }] } };
  const requestOption: I.OpenApiRequestType = {
    method: 'POST',
    header: h, // changed from header to headers
    body: JSON.stringify(p),
  };
  return requestOption;
};

export const sendRequest = async function (
  instance: I.OpenApiInstanceType,
  command: string
): Promise<I.OpenAiRequestResult> {
  const header = headers(instance.key);
  const request = requestOption(header, instance.param, command);
  try {
    const response: AxiosResponse<I.ChatGptSuccessResponseType> = await axios.post(
      url,
      request.body,
      {
        headers: request.header,
      }
    );
    return { isError: false, result: response.data, error: null };
  } catch (error) {
    return {
      isError: true,
      result: null,
      error: (error as Error).message || 'An error occurred',
    };
  }
};
