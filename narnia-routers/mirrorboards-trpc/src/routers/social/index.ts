import t from "../../trpc";
import { generateMarketingPersonas } from "./generate-marketing-personas";

export default t.router({
  social: t.mergeRouters(generateMarketingPersonas)
});
