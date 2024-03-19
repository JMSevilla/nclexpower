import { AxiosInstance } from "axios";

export class AuthApi {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly ssrAxios: AxiosInstance
  ) {}
}
