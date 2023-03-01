import { t } from "../../trpc";
import { findAllPublic } from "./procedures/find-all-public.procedure";
import { create } from "./procedures/create.procedure";

export const router = t.mergeRouters(findAllPublic, create);
