import { t } from "../../trpc";
import { fetchAuthenticator } from "./procedures/fetch-authenticator.procedure";
import { fetchAuthenticators } from "./procedures/fetch-authenticators.procedure";

export const router = t.mergeRouters(fetchAuthenticator, fetchAuthenticators);
