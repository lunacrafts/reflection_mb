import { t } from "../../../trpc";
import { findByJWTToken } from "./procedures/findByJWTToken.procedure";

export const router = t.mergeRouters(findByJWTToken);
