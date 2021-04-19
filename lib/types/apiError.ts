export interface ApiError {
  request: {
    method: string;
    path: string;
    baseUrl: string;
    headers: { [header: string]: string };
  };
  status: number;
  error: string;
}
