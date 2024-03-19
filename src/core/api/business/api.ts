import { AxiosInstance } from "axios";

export class BusinessApi {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly ssrAxios: AxiosInstance
  ) {}
}
