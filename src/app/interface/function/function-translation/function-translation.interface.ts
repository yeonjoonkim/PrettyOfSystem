import { TextFormatType, APITranslationStatus, TimeStamp } from '../../../constant/constant';
import { NameValuePairType } from '../../global/global.interface';
import {
  ILanguageTranslateResult,
  ILanguageTranslatedFormatCriteria,
} from '../../system/language/language.interface';

export type ChatGptTranslateDocumentChangeType = {
  isCreate: boolean;
  isPending: boolean;
  isInProgrss: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  isCompleted: boolean;
};

export type ChatGptTranslateDocumentLifeCycleType = {
  createToPending: boolean;
  pendingToInProgress: boolean;
  createToInProgress: boolean;
  inProgressToPending: boolean;
  inProgressToSuccess: boolean;
  inProgressToFail: boolean;
  successToFail: boolean;
  failToPending: boolean;
  successToCompleted: boolean;
  completedToPending: boolean;
};

export type ChatGptTranslateDocumentChangeActionType = {
  tryReconnectOpenAPI: boolean;
  startTranslate: boolean;
  updateShopLanguagePackage: boolean;
  failAlert: boolean;
  findPendingToInProgress: boolean;
};

export type OpenApiInstanceType = {
  id: string;
  index: number;
  key: string;
  param: OpenApiParameterType;
  inUse: boolean;
  shopId: string;
  serviceId: string;
  format: string;
};

export type OpenApiHeaderType = {
  'Content-Type': string;
  Authorization: string;
};

export type OpenApiRequestType = {
  method: string;
  header: OpenApiHeaderType;
  body: string;
};

export type OpenApiParameterType = {
  model: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
};

export type OpenAiRequestResult = {
  isError: boolean;
  result: ChatGptSuccessResponseType | null;
  error: string | null;
};

export type ChatGptTranslateDocumentType = {
  id: string;
  shopId: string;
  serviceId: string;
  packageKey: string;
  format: TextFormatType;
  languages: NameValuePairType[];
  result: NameValuePairType[];
  prop: string;
  status: APITranslationStatus;
  createdDate: Date | TimeStamp;
  error: NameValuePairType[];
  attempt: number;
  translateResult: ChatGptTranslateResult[];
  parentId: string;
};

export type ChatGptTranslateResult = {
  response: OpenAiRequestResult | null;
  command: string;
  formatter: ILanguageTranslatedFormatCriteria;
  translatedObject: ILanguageTranslateResult;
  result: NameValuePairType;
  language: NameValuePairType;
  error: boolean;
};

export type ChatGptErrorResponseType = {
  error: ChatGptErrorType;
};

export type ChatGptSuccessResponseType = {
  id: string;
  object: string;
  created: number;
  choices: ChatGptChoiceType[];
  usage: ChatGptUsageType;
};

export type ChatGptUsageType = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

export type ChatGptChoiceType = {
  index: number;
  message: ChatGPTChoiceMessage;
  finish_reason: string;
};

export type ChatGPTChoiceMessage = {
  role: string;
  content: string;
};

export type ChatGptErrorType = {
  message: string;
  type: string;
  param: null | string | object;
  code: string;
};
