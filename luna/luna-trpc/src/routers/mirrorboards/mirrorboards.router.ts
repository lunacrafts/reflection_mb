import { t } from "../../trpc";
import { findAllPublic } from "./procedures/find-all-public.procedure";

export const router = t.mergeRouters(findAllPublic);
