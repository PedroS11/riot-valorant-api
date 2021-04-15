import { AxiosError, AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => response.data;

export const errorInterceptor = (error: AxiosError) => {
  switch (error.response!.status) {
    case 400:
    case 401:
    case 403:
    case 404:
    case 405:
    case 415:
    case 429:
    case 500:
    case 502:
    case 503:
    case 504:
      // Handle errors threw by Valorant Api
      return Promise.reject({
        status: error.response!.status,
        error: error.response!.data!.status!.message,
      });
    // Handle generic errors
    default:
      return Promise.reject({
        status: error.response!.status,
        error: error.response?.data?.status?.message || "Unexpected error",
      });
  }
};
