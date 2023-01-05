import t from "../../trpc";
import { authenticate } from "./authenticate";

export default t.router({
  social: t.mergeRouters(authenticate)
});
