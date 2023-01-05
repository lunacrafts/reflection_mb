import t from "../../trpc";
import { fetchAuthenticators } from "./fetch-authenticators";

export default t.router({
  auth: t.mergeRouters(fetchAuthenticators)
});
