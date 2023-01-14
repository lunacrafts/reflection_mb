import t from "../../trpc";
import { fetchAuthenticator } from "./fetch-authenticator";
import { fetchAuthenticators } from "./fetch-authenticators";

export default t.router({
  auth: t.mergeRouters(fetchAuthenticator, fetchAuthenticators)
});
