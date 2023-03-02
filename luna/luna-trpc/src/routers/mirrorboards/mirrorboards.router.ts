import { t } from "../../trpc";
import { findAllPublic } from "./procedures/find-all-public.procedure";
import { create } from "./procedures/create.procedure";
import { promote } from "./procedures/promote.procedure";

export const router = t.mergeRouters(findAllPublic, create, promote);
