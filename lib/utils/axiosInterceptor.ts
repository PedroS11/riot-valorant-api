import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ApiError } from "../types/apiError";

export const axiosInterceptor = (axios: AxiosInstance): AxiosInstance => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError): Promise<ApiError> => {
      const { config } = error;

      return Promise.reject({
        request: {
          method: config.method,
          path: error.config.url,
          baseUrl: error.config.baseURL,
          headers: error.config.headers,
        },
        status: error.response?.status,
        error:
          error.response?.data?.status?.message || // Riot Api error message
          error.response?.data || // Axios error message
          error.message, // Default Node error message
      });
    }
  );

  return axios;
};
