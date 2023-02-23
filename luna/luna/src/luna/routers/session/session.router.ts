import { t } from "../../../trpc";
import { me } from "./procedures/me.procedure";

export const router = t.mergeRouters(me);
