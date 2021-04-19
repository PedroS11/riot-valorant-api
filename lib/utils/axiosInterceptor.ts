import { AxiosError, AxiosResponse } from "axios";
import { ApiError } from "../types/apiError";

export const responseInterceptor = (response: AxiosResponse) => response.data;

export const errorInterceptor = (error: AxiosError): Promise<ApiError> => {
  const { config } = error;

  return Promise.reject({
    request: {
      method: config.method,
      path: error.config.url,
      baseUrl: error.config.baseURL,
      headers: error.config.headers,
    },
    status: error.response!.status,
    error: error.response?.data?.status?.message || "Unexpected error",
  });
};
