import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { getToken } from '@src/services/token';

type DetailMessageType = {
  type: string;
  message: string;
};

type IgnoreErrorMessage = {
  Start?: string;
  End?: string;
  Include?: string;
};

const IgnoreErrorMessages: IgnoreErrorMessage[] = [
  { Include: 'Token' },
  { Start: 'Access' },
  { Start: 'Offer with id', End: 'not found.' },
];

const ignoreErrorMessage = (errorMessage: DetailMessageType): boolean =>
  IgnoreErrorMessages.reduce(
    (result, item) =>
      result ||
      (errorMessage.message.includes(item.Include ?? '') &&
        errorMessage.message.startsWith(item.Start ?? '') &&
        errorMessage.message.endsWith(item.End ?? '')),
    false
  );

const StatusCodeMapping = new Set([
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.NOT_FOUND,
]);

const shouldDisplayError = (response: AxiosResponse) =>
  StatusCodeMapping.has(response.status);

const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (!error.response) {
        toast.error(error.message);
      }
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        if (!ignoreErrorMessage(detailMessage)) {
          toast.warn(detailMessage.message);
        }
      }
      throw error;
    }
  );

  return api;
};
