import { AxiosInstance } from "axios";
import { useAsync, useAsyncCallback } from "react-async-hook";
import { Api } from "../api";
import { AuthApi } from "../api/auth/api";
import { AccountsApi } from "../api/accounts/api";
import { BusinessApi } from "../api/business/api";
import Http, { HttpOptions } from "../http-client";
import { getItem } from "../session-storage";

const HTTP_OPTIONS: HttpOptions = {
  headers: { ENV: "" },
  paramsSerializer: (params) => JSON.stringify(params),
  onRequest: (req) => {
    const accessToken = getItem<string | undefined>("accessToken");
    if (req.headers && accessToken)
      req.headers.Authorization = `Bearer ${accessToken}`;
  },
  onError: (error) => {
    const user = getItem<string | undefined>("user");
    // logger if necessary for analytics
    console.error(
      `Error on response: ${JSON.stringify(error)}. User: ${JSON.stringify(
        user
      )}`
    );
  },
};

export const httpClient = new Http({ ...HTTP_OPTIONS, baseURL: "" });
export const httpSsrClient = new Http({
  ...HTTP_OPTIONS,
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : typeof window !== "undefined"
      ? window.location.origin
      : undefined,
});

export const useApi = <R, D extends unknown[]>(
  asyncFn: (api: Api) => Promise<R>,
  deps?: D
) => {
  return useAsync(async () => {
    try {
      const api = createApi(httpClient.client, httpSsrClient.client);
      return await asyncFn(api);
    } catch (error: any) {
      throw new Error(error);
    }
  }, [httpClient, ...(deps || [])]);
};

export const useApiCallback = <R, A extends unknown>(
  asyncFn: (api: Api, args: A) => Promise<R>
) => {
  return useAsyncCallback(async (args?: A) => {
    try {
      const api = createApi(httpClient.client, httpSsrClient.client);
      return await asyncFn(api, args as A);
    } catch (error: any) {
      throw new Error(error);
    }
  });
};

function createApi(client: AxiosInstance, httpSsrClient: AxiosInstance) {
  return new Api(
    new AuthApi(client, httpSsrClient),
    new AccountsApi(client),
    new BusinessApi(client, httpSsrClient)
  );
}
