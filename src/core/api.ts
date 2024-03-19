import { AuthApi } from "./api/auth/api";
import { AccountsApi } from "./api/accounts/api";
import { BusinessApi } from "./api/business/api";

export class Api {
  constructor(
    readonly authentication: AuthApi,
    readonly accounts: AccountsApi,
    readonly business: BusinessApi
  ) {}
}
